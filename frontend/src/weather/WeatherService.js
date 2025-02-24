import axios from "../api/axios";

class WeatherService {
    getWeather(city) {
        return axios.get(`weather?city=${city}`).then(response => response.data);
    }

    getWeatherList() {
        return axios.get('weather/list').then(response => response.data);
    }
}

export default WeatherService;
