from rest_framework import serializers
from .models import DomainProperty

class DomainPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = DomainProperty
        fields = '__all__'
