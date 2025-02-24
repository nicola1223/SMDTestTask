from django.urls import path
from . import views

urlpatterns = [
    path('api/weather/', views.WeatherView.as_view(), name='weather'),
]