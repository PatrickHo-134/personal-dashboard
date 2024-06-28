from rest_framework import generics
from .models import DomainProperty
from .serializers import DomainPropertySerializer
from rest_framework.pagination import PageNumberPagination

class DomainPropertyPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class DomainPropertyListView(generics.ListAPIView):
    queryset = DomainProperty.objects.all()
    serializer_class = DomainPropertySerializer
    pagination_class = DomainPropertyPagination

