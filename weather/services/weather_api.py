import os
import httpx
from dotenv import load_dotenv

env_path = os.path.join(os.path.dirname(__file__), "../.env")
if os.path.exists(env_path):
    load_dotenv(env_path)

class WeatherApi:
    @staticmethod
    async def get_weather_forecast(city: str) -> dict:
        api_key = os.getenv("WEATHER_API_KEY")
        api_url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
        async with httpx.AsyncClient() as client:
            response = await client.get(api_url)

            if response.status_code == 200:
                return response.json()
            else:
                return {}
