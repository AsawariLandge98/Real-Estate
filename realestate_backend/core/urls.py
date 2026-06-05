from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path('login/',    views.admin_login_view,  name='admin_login'),
    path('logout/',   views.admin_logout_view, name='admin_logout'),

    # Dashboard
    path('dashboard/', views.admin_dashboard,  name='admin_dashboard'),
    path('',           views.admin_dashboard,  name='admin_root'),

    # Inventory
    path('inventory/',             views.inventory_list,   name='inventory_list'),
    path('inventory/add/',         views.property_add,     name='property_add'),
    path('inventory/<int:pk>/',    views.property_detail,  name='property_detail'),
    path('inventory/<int:pk>/edit/',   views.property_edit,   name='property_edit'),
    path('inventory/<int:pk>/delete/', views.property_delete, name='property_delete'),

    # Inquiries
    path('inquiries/',             views.inquiry_list,    name='inquiry_list'),
    path('inquiries/<int:pk>/',    views.inquiry_detail,  name='inquiry_detail'),
    path('inquiries/<int:pk>/delete/', views.inquiry_delete, name='inquiry_delete'),

    # Public API
    path('api/properties/',  views.api_properties,     name='api_properties'),
    path('api/inquiries/',   views.api_submit_inquiry,  name='api_submit_inquiry'),
]
