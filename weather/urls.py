from django.urls import path
from . import views

urlpatterns = [
    path('', views.WeatherView.as_view(), name='weather'),
    path('/list', views.WeatherListView.as_view(), name='weather_list'),
]