from django.db import models



class Weather(models.Model):
    city_name = models.CharField(max_length=50)
    timestamp = models.DateTimeField()
    weather_main = models.CharField(max_length=50)
    weather_desc = models.TextField()
    weather_temp = models.FloatField()
    weather_feels_like = models.FloatField()
    weather_humidity = models.IntegerField()
    weather_wind_speed = models.FloatField()
