# weather/views.py
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Weather
from .serializers import WeatherSerializer


class WeatherView(APIView):
    def get(self, request, *args, **kwargs):
        city = request.query_params.get("city", "Sydney")

        api_key = '' # openweathermap apikey here
        # may need to specify country of the city as well such as 'http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={api_key}&units=metric'
        request_url = "http://api.openweathermap.org/data/2.5/weather?q=" + \
            city + "&appid=" + api_key + "&units=metric"
        response = requests.get(request_url)

        if response.status_code == 200:
            data = response.json()
            weather_data = {
                'city': city,
                'country': data['sys']['country'],
                'temperature': data['main']['temp'],
                'feels_like': data['main']['feels_like'],
                'temp_min': data['main']['temp_min'],
                'temp_max': data['main']['temp_max'],
                'humidity': data['main']['humidity'],
                'pressure': data['main']['pressure'],
                'weather_description': data['weather'][0]['description'],
                'weather_icon': data['weather'][0]['icon'],
                'wind_speed': data['wind']['speed'],
                'api_response_id': data['id'],
                'timezone': data['timezone'],
                'unit': 'metric',
                'longitude': data['coord']['lon'],
                'latitude': data['coord']['lat'],
            }

            serializer = WeatherSerializer(data=weather_data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Failed to fetch weather data'}, status=response.status_code)
