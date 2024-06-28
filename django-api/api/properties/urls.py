from django.urls import path
from .views import DomainPropertyListView

urlpatterns = [
    path('properties/', DomainPropertyListView.as_view(), name='domain-property-list'),
]
