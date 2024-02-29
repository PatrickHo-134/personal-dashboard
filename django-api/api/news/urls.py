from django.urls import path
from .viewsets import NewsHeadlinesView

urlpatterns = [
    path('news-headlines/', NewsHeadlinesView.as_view(), name='news-headlines'),
]
