from django.contrib import admin
from .models import Property, Inquiry


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display  = ('property_id', 'title', 'locality', 'purpose', 'category', 'status', 'price', 'featured')
    list_filter   = ('purpose', 'category', 'status', 'featured')
    search_fields = ('property_id', 'title', 'locality', 'consultant_name')
    ordering      = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display  = ('name', 'email', 'phone', 'property_ref', 'status', 'source', 'created_at')
    list_filter   = ('status', 'source')
    search_fields = ('name', 'email', 'phone', 'property_ref')
    ordering      = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')