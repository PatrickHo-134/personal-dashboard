from django.db import models
import uuid

class Weather(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=2)
    temperature = models.FloatField()
    feels_like = models.FloatField()
    weather_description = models.CharField(max_length=255)
    wind_speed = models.FloatField()
    humidity = models.IntegerField()
    pressure = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    weather_icon = models.CharField(max_length=20)
    api_response_id = models.IntegerField()
    timezone = models.IntegerField()
    unit = models.CharField(max_length=10)
    longitude = models.FloatField()
    latitude = models.FloatField()
    temp_min = models.FloatField()
    temp_max = models.FloatField()

    def __str__(self):
        return f'{self.city}, {self.country} - {self.timestamp}'
