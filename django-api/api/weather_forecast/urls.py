from django.urls import path
from .views import WeatherView

urlpatterns = [
    path('fetch-weather-forecast/', WeatherView.as_view(), name='fetch-weather-forecast'),
]