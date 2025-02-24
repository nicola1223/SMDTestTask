import {useRef} from "react";
import WeatherService from "./WeatherService";

const weatherService = new WeatherService();

const WeatherGet = () => {
    const city = useRef();
    const cityName = useRef();
    const timestamp = useRef();
    const weatherMain = useRef();
    const weatherDesc = useRef();
    const weatherTemp = useRef();
    const weatherFeelsLike = useRef();
    const weatherHumidity = useRef();
    const weatherWindSpeed = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        const cityValue = city.current.value;

        weatherService.getWeather(cityValue).then((c) => {
            cityName.current.textContent = c.city_name;
            timestamp.current.textContent = new Date(c.timestamp).toLocaleString('ru-RU', {
                timeZone: 'Europe/Minsk',
                hour12: false // Use 24-hour format
            });
            weatherMain.current.textContent = c.weather_main;
            weatherDesc.current.textContent = c.weather_desc;
            weatherTemp.current.textContent = `${c.weather_temp} °C`;
            weatherFeelsLike.current.textContent = `${c.weather_feels_like} °C`;
            weatherHumidity.current.textContent = `${c.weather_humidity}%`;
            weatherWindSpeed.current.textContent = `${c.weather_wind_speed} m/s`;
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    return (
        <div className={'weather-get'}>
            <form onSubmit={handleSubmit}>
                <input className={'form-control'} id={'city'} type={'text'} ref={city} placeholder={'Город'} required/>
                <div className="submit">
                    <input className="btn btn-primary" type="submit" value="GET WEATHER"/>
                </div>
            </form>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" ref={cityName}></h5>
                    <h6 className="card-subtitle mb-2 text-muted" ref={timestamp}></h6>
                    <p className="card-text">
                        <strong>Main Weather:</strong> <span ref={weatherMain}></span><br/>
                        <strong>Description:</strong> <span ref={weatherDesc}></span><br/>
                        <strong>Temperature:</strong> <span ref={weatherTemp}></span><br/>
                        <strong>Feels Like:</strong> <span ref={weatherFeelsLike}></span><br/>
                        <strong>Humidity:</strong> <span ref={weatherHumidity}></span><br/>
                        <strong>Wind Speed:</strong> <span ref={weatherWindSpeed}></span>
                    </p>
                </div>
            </div>
        </div>
)
}

export default WeatherGet;