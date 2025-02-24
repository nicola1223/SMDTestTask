import {useEffect, useState} from "react";
import weatherService from "./WeatherService";

const WeatherList = () => {
    const [weatherList, setWeatherList] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState('');
    const [prevPageUrl, setPrevPageUrl] = useState('');

    useEffect(() => {
        const fetchWeatherList = async () => {
            try {
                const result = await weatherService.getWeatherList();
                setWeatherList(result.data);
                setNextPageUrl(result.nextlink);
                setPrevPageUrl(result.prevlink);
            } catch (error) {
                console.error("Error fetching weather list:", error);
            }
        }

        fetchWeatherList();
    }, []);

    const nextPage = async () => {
        if (!nextPageUrl) return;

        try {
            const result = await weatherService.getWeatherListByUrl(nextPageUrl);
            setWeatherList(result.data);
            setNextPageUrl(result.nextlink);
            setPrevPageUrl(result.prevlink);
        }  catch (error) {
            console.error("Error fetching next page:", error);
        }
    }

    const prevPage = async () => {
        if (!prevPageUrl) return;

        try {
            const result = await weatherService.getWeatherListByUrl(prevPageUrl);
            setWeatherList(result.data);
            setNextPageUrl(result.nextlink);
            setPrevPageUrl(result.prevlink);
        }  catch (error) {
            console.error("Error fetching next page:", error);
        }
    }

    return (
        <div className={'weather-list'}>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Time</th>
                    <th>Main</th>
                    <th>Desc</th>
                    <th>Temp</th>
                    <th>Temp Feels</th>
                    <th>Humidity</th>
                    <th>Wind Speed</th>
                </tr>
                </thead>
                <tbody>
                    {weatherList.map((c) => (
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.city_name}</td>
                            <td>{
                                new Date(c.timestamp).toLocaleString('ru-RU', {
                                    timeZone: 'Europe/Minsk',
                                    hour12: false // Use 24-hour format
                                })
                            }</td>
                            <td>{c.weather_main}</td>
                            <td>{c.weather_desc}</td>
                            <td>{`${c.weather_temp} °C`}</td>
                            <td>{`${c.weather_feels_like} °C`}</td>
                            <td>{`${c.weather_humidity}%`}</td>
                            <td>{`${c.weather_wind_speed} m/s`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={'d-flex justify-content-between'}>
                {prevPageUrl && <button className="btn btn-primary" onClick={prevPage}>Prev</button>}
                {nextPageUrl && <button className="btn btn-primary ms-auto" onClick={nextPage}>Next</button>}
            </div>
        </div>
    );
}

export default WeatherList;