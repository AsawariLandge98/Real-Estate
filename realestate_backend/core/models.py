from django.db import models
from django.utils import timezone


class Property(models.Model):
    PURPOSE_CHOICES = [('buy', 'Buy'), ('rent', 'Rent')]
    CATEGORY_CHOICES = [('residential', 'Residential'), ('commercial', 'Commercial')]
    STATUS_CHOICES = [('active', 'Active'), ('sold', 'Sold'), ('rented', 'Rented'), ('draft', 'Draft')]
    FURNISHING_CHOICES = [
        ('unfurnished', 'Unfurnished'),
        ('semi-furnished', 'Semi-Furnished'),
        ('fully-furnished', 'Fully-Furnished'),
        ('fully-fitted', 'Fully Fitted'),
    ]

    # Core
    property_id   = models.CharField(max_length=20, unique=True, blank=True)
    title         = models.CharField(max_length=200)
    locality      = models.CharField(max_length=200)
    description   = models.TextField(blank=True)

    # Classification
    purpose       = models.CharField(max_length=10, choices=PURPOSE_CHOICES, default='buy')
    category      = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='residential')
    property_type = models.CharField(max_length=50)  # Apartment, Villa, Penthouse, Office Space…
    status        = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    # Pricing
    price         = models.DecimalField(max_digits=14, decimal_places=2)
    price_label   = models.CharField(max_length=30, blank=True)
    price_period  = models.CharField(max_length=20, blank=True)  # "/ month" for rent

    # Details
    bhk           = models.PositiveSmallIntegerField(null=True, blank=True)
    area          = models.PositiveIntegerField(null=True, blank=True)  # sq ft
    floor         = models.CharField(max_length=30, blank=True)
    facing        = models.CharField(max_length=30, blank=True)
    furnishing    = models.CharField(max_length=20, choices=FURNISHING_CHOICES, blank=True)
    parking       = models.PositiveSmallIntegerField(default=0)
    age           = models.CharField(max_length=30, blank=True)

    # Media
    image         = models.TextField(blank=True)
    gallery       = models.JSONField(default=list, blank=True)
    badges        = models.JSONField(default=list, blank=True)
    amenities     = models.JSONField(default=list, blank=True)

    # Flags
    featured      = models.BooleanField(default=False)
    consultant_name     = models.CharField(max_length=100, blank=True)
    consultant_title    = models.CharField(max_length=100, blank=True)
    consultant_initials = models.CharField(max_length=5, blank=True)

    created_at    = models.DateTimeField(auto_now_add=True)
    updated_at    = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Properties'

    def save(self, *args, **kwargs):
        if not self.property_id:
            last = Property.objects.order_by('-id').first()
            num = (last.id if last else 0) + 1
            self.property_id = f'AC-{1000 + num}'
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.property_id} — {self.title}'


class Inquiry(models.Model):
    STATUS_CHOICES = [('new', 'New'), ('contacted', 'Contacted'), ('closed', 'Closed')]
    SOURCE_CHOICES = [('website', 'Website'), ('phone', 'Phone'), ('walk-in', 'Walk-In'), ('referral', 'Referral')]

    name        = models.CharField(max_length=100)
    email       = models.EmailField()
    phone       = models.CharField(max_length=20, blank=True)
    message     = models.TextField(blank=True)
    property    = models.ForeignKey(Property, null=True, blank=True, on_delete=models.SET_NULL, related_name='inquiries')
    property_ref= models.CharField(max_length=50, blank=True)  # if no FK
    status      = models.CharField(max_length=12, choices=STATUS_CHOICES, default='new')
    source      = models.CharField(max_length=20, choices=SOURCE_CHOICES, default='website')
    notes       = models.TextField(blank=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Inquiries'

    def __str__(self):
        return f'{self.name} — {self.email} ({self.status})'