from rest_framework import serializers
from .models import Property, Inquiry


class PropertySerializer(serializers.ModelSerializer):
    inquiry_count = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = '__all__'
        read_only_fields = ['property_id', 'created_at', 'updated_at']

    def get_inquiry_count(self, obj):
        return obj.inquiries.count()


class InquirySerializer(serializers.ModelSerializer):
    property_title = serializers.SerializerMethodField()

    class Meta:
        model = Inquiry
        fields = '__all__'

    def get_property_title(self, obj):
        if obj.property:
            return obj.property.title
        return obj.property_ref
