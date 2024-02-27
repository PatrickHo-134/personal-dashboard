from django.urls import path
from .viewsets import NewsHeadlinesView

urlpatterns = [
    path('top-news-headlines/', NewsHeadlinesView.as_view(), name='top-news-headlines'),
]
