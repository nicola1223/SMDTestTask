from django.http import QueryDict
from rest_framework import serializers
from weather.models import Weather


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        if kwargs.get('data', None):
            data = kwargs['data']
            new_data = QueryDict('', mutable=True)
            new_data.update({
                'city_name': data['name'],
                'weather_main': data['weather'][0]['main'],
                'weather_desc': data['weather'][0]['description'],
                'weather_temp': data['main']['temp'],
                'weather_feels_like': data['main']['feels_like'],
                'weather_humidity': data['main']['humidity'],
                'weather_wind_speed': data['wind']['speed'],
            })
            kwargs['data'] = new_data
        super(WeatherSerializer, self).__init__(*args, **kwargs)
