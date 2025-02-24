from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from rest_framework import status
from django.urls import reverse
from rest_framework.views import APIView
from rest_framework.response import Response
from .services.weather_api import WeatherApi
from .serializers import WeatherSerializer
from.models import Weather

class WeatherView(APIView):
    @staticmethod
    def get(request):
        city = request.GET.get('city')
        response = WeatherApi.get_weather_forecast(city)
        serializer = WeatherSerializer(data=response)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class WeatherListView(APIView):
    @staticmethod
    def get(request):
        next_page = 1
        previous_page = 1
        weather_list = Weather.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(weather_list, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = WeatherSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            next_page = data.next_page_number()
        if data.has_previous():
            previous_page = data.previous_page_number()

        return Response({
                'data': serializer.data,
                'count': paginator.count,
                'num_pages': paginator.num_pages,
                'nextlink': f'{reverse('weather_list')}?page={next_page}',
                'prevlink': f'{reverse('weather_list')}?page={previous_page}',
            },
            status=status.HTTP_200_OK
        )