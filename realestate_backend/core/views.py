from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q, Count
from django.utils import timezone
from datetime import timedelta
import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Property, Inquiry
from .serializers import PropertySerializer, InquirySerializer


# ─── AUTH VIEWS ────────────────────────────────────────────────────────────────

def admin_login_view(request):
    if request.user.is_authenticated:
        return redirect('admin_dashboard')
    error = None
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '')
        user = authenticate(request, username=username, password=password)
        if user and user.is_staff:
            login(request, user)
            return redirect('admin_dashboard')
        error = 'Invalid credentials or insufficient permissions.'
    return render(request, 'core/login.html', {'error': error})


def admin_logout_view(request):
    logout(request)
    return redirect('admin_login')


# ─── DASHBOARD ─────────────────────────────────────────────────────────────────

@login_required(login_url='/admin-panel/login/')
def admin_dashboard(request):
    total_props   = Property.objects.count()
    active_props  = Property.objects.filter(status='active').count()
    total_inq     = Inquiry.objects.count()
    new_inq       = Inquiry.objects.filter(status='new').count()
    recent_inq    = Inquiry.objects.select_related('property').order_by('-created_at')[:5]
    recent_props  = Property.objects.order_by('-created_at')[:5]

    # last 7 days inquiries
    week_ago = timezone.now() - timedelta(days=7)
    weekly_inq = Inquiry.objects.filter(created_at__gte=week_ago).count()

    buy_count  = Property.objects.filter(purpose='buy', status='active').count()
    rent_count = Property.objects.filter(purpose='rent', status='active').count()

    return render(request, 'core/dashboard.html', {
        'total_props': total_props,
        'active_props': active_props,
        'total_inq': total_inq,
        'new_inq': new_inq,
        'weekly_inq': weekly_inq,
        'buy_count': buy_count,
        'rent_count': rent_count,
        'recent_inq': recent_inq,
        'recent_props': recent_props,
    })


# ─── INVENTORY VIEWS ───────────────────────────────────────────────────────────

@login_required(login_url='/admin-panel/login/')
def inventory_list(request):
    qs = Property.objects.annotate(inq_count=Count('inquiries'))

    # Filters
    q        = request.GET.get('q', '')
    purpose  = request.GET.get('purpose', '')
    category = request.GET.get('category', '')
    status   = request.GET.get('status', '')
    prop_type= request.GET.get('type', '')
    sort     = request.GET.get('sort', '-created_at')

    if q:
        qs = qs.filter(Q(title__icontains=q) | Q(locality__icontains=q) | Q(property_id__icontains=q))
    if purpose:
        qs = qs.filter(purpose=purpose)
    if category:
        qs = qs.filter(category=category)
    if status:
        qs = qs.filter(status=status)
    if prop_type:
        qs = qs.filter(property_type=prop_type)

    valid_sorts = ['price', '-price', 'area', '-area', 'created_at', '-created_at', 'title']
    if sort in valid_sorts:
        qs = qs.order_by(sort)

    prop_types = Property.objects.values_list('property_type', flat=True).distinct()

    return render(request, 'core/inventory.html', {
        'properties': qs,
        'prop_types': prop_types,
        'filters': {'q': q, 'purpose': purpose, 'category': category, 'status': status, 'type': prop_type, 'sort': sort},
    })


@login_required(login_url='/admin-panel/login/')
def property_detail(request, pk):
    prop = get_object_or_404(Property, pk=pk)
    inquiries = prop.inquiries.order_by('-created_at')
    return render(request, 'core/property_detail.html', {'prop': prop, 'inquiries': inquiries})


@login_required(login_url='/admin-panel/login/')
def property_add(request):
    if request.method == 'POST':
        data = request.POST
        badges   = [b.strip() for b in data.get('badges', '').split(',') if b.strip()]
        amenities= [a.strip() for a in data.get('amenities', '').split('\n') if a.strip()]
        gallery  = [u.strip() for u in data.get('gallery', '').split('\n') if u.strip()]

        prop = Property.objects.create(
            title         = data.get('title'),
            locality      = data.get('locality'),
            description   = data.get('description', ''),
            purpose       = data.get('purpose', 'buy'),
            category      = data.get('category', 'residential'),
            property_type = data.get('property_type'),
            status        = data.get('status', 'active'),
            price         = data.get('price') or 0,
            price_label   = data.get('price_label', ''),
            price_period  = data.get('price_period', ''),
            bhk           = data.get('bhk') or None,
            area          = data.get('area') or None,
            floor         = data.get('floor', ''),
            facing        = data.get('facing', ''),
            furnishing    = data.get('furnishing', ''),
            parking       = data.get('parking') or 0,
            age           = data.get('age', ''),
            image         = data.get('image', ''),
            gallery       = gallery,
            badges        = badges,
            amenities     = amenities,
            featured      = 'featured' in data,
            consultant_name     = data.get('consultant_name', ''),
            consultant_title    = data.get('consultant_title', ''),
            consultant_initials = data.get('consultant_initials', ''),
        )
        messages.success(request, f'Property {prop.property_id} added successfully.')
        return redirect('inventory_list')
    return render(request, 'core/property_form.html', {'action': 'Add', 'prop': None})


@login_required(login_url='/admin-panel/login/')
def property_edit(request, pk):
    prop = get_object_or_404(Property, pk=pk)
    if request.method == 'POST':
        data = request.POST
        badges   = [b.strip() for b in data.get('badges', '').split(',') if b.strip()]
        amenities= [a.strip() for a in data.get('amenities', '').split('\n') if a.strip()]
        gallery  = [u.strip() for u in data.get('gallery', '').split('\n') if u.strip()]

        prop.title         = data.get('title')
        prop.locality      = data.get('locality')
        prop.description   = data.get('description', '')
        prop.purpose       = data.get('purpose', 'buy')
        prop.category      = data.get('category', 'residential')
        prop.property_type = data.get('property_type')
        prop.status        = data.get('status', 'active')
        prop.price         = data.get('price') or 0
        prop.price_label   = data.get('price_label', '')
        prop.price_period  = data.get('price_period', '')
        prop.bhk           = data.get('bhk') or None
        prop.area          = data.get('area') or None
        prop.floor         = data.get('floor', '')
        prop.facing        = data.get('facing', '')
        prop.furnishing    = data.get('furnishing', '')
        prop.parking       = data.get('parking') or 0
        prop.age           = data.get('age', '')
        prop.image         = data.get('image', '')
        prop.gallery       = gallery
        prop.badges        = badges
        prop.amenities     = amenities
        prop.featured      = 'featured' in data
        prop.consultant_name     = data.get('consultant_name', '')
        prop.consultant_title    = data.get('consultant_title', '')
        prop.consultant_initials = data.get('consultant_initials', '')
        prop.save()
        messages.success(request, f'Property {prop.property_id} updated successfully.')
        return redirect('inventory_list')
    return render(request, 'core/property_form.html', {'action': 'Edit', 'prop': prop})


@login_required(login_url='/admin-panel/login/')
def property_delete(request, pk):
    prop = get_object_or_404(Property, pk=pk)
    if request.method == 'POST':
        pid = prop.property_id
        prop.delete()
        messages.success(request, f'Property {pid} deleted.')
        return redirect('inventory_list')
    return render(request, 'core/confirm_delete.html', {'obj': prop, 'type': 'Property'})


# ─── INQUIRY VIEWS ─────────────────────────────────────────────────────────────

@login_required(login_url='/admin-panel/login/')
def inquiry_list(request):
    qs = Inquiry.objects.select_related('property')

    q      = request.GET.get('q', '')
    status = request.GET.get('status', '')
    source = request.GET.get('source', '')
    prop   = request.GET.get('property', '')
    sort   = request.GET.get('sort', '-created_at')

    if q:
        qs = qs.filter(Q(name__icontains=q) | Q(email__icontains=q) | Q(phone__icontains=q))
    if status:
        qs = qs.filter(status=status)
    if source:
        qs = qs.filter(source=source)
    if prop:
        qs = qs.filter(Q(property__property_id__icontains=prop) | Q(property_ref__icontains=prop))

    valid_sorts = ['created_at', '-created_at', 'name', 'status']
    if sort in valid_sorts:
        qs = qs.order_by(sort)

    return render(request, 'core/inquiries.html', {
        'inquiries': qs,
        'filters': {'q': q, 'status': status, 'source': source, 'property': prop, 'sort': sort},
    })


@login_required(login_url='/admin-panel/login/')
def inquiry_detail(request, pk):
    inq = get_object_or_404(Inquiry, pk=pk)
    if request.method == 'POST':
        inq.status = request.POST.get('status', inq.status)
        inq.notes  = request.POST.get('notes', inq.notes)
        inq.save()
        messages.success(request, 'Inquiry updated.')
        return redirect('inquiry_list')
    return render(request, 'core/inquiry_detail.html', {'inq': inq})


@login_required(login_url='/admin-panel/login/')
def inquiry_delete(request, pk):
    inq = get_object_or_404(Inquiry, pk=pk)
    if request.method == 'POST':
        inq.delete()
        messages.success(request, 'Inquiry deleted.')
        return redirect('inquiry_list')
    return render(request, 'core/confirm_delete.html', {'obj': inq, 'type': 'Inquiry'})


# ─── PUBLIC API ────────────────────────────────────────────────────────────────

@api_view(['GET'])
@permission_classes([AllowAny])
def api_properties(request):
    qs = Property.objects.filter(status='active')
    purpose  = request.GET.get('purpose')
    category = request.GET.get('category')
    featured = request.GET.get('featured')
    if purpose:  qs = qs.filter(purpose=purpose)
    if category: qs = qs.filter(category=category)
    if featured: qs = qs.filter(featured=True)
    serializer = PropertySerializer(qs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([AllowAny])
def api_submit_inquiry(request):
    serializer = InquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': True, 'message': 'Inquiry submitted.'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ─── CONTEXT PROCESSOR ─────────────────────────────────────────────────────────

def admin_context(request):
    """Inject new inquiry count into every admin template."""
    if request.user.is_authenticated and request.user.is_staff:
        new_inq_count = Inquiry.objects.filter(status='new').count()
        return {'new_inq_count': new_inq_count}
    return {}
