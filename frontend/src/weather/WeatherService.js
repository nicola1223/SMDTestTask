import axios from "../api/axios";

class WeatherService {
    getWeather(city) {
        return axios.get(`/api/weather?city=${city}`).then(response => response.data);
    }

    static async getWeatherList() {
        return axios.get('/api/weather/list').then(response => response.data);
    }

    static async getWeatherListByUrl(url) {
        return axios.get(url).then(response => response.data);
    }
}

export default WeatherService;
