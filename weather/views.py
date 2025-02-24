from rest_framework.views import APIView
from rest_framework.response import Response
from services.weather_api import WeatherApi

class WeatherView(APIView):
    @staticmethod
    def get(request):
        city = request.GET.get('city')
        response = WeatherApi.get_weather_forecast(city)
        print(response)
        # TODO доделать логику
