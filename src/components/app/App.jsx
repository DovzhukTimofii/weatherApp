import './App.scss';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {FifthDay, FirstDay, FourthDay, SecondDay, SixthDay, ThirdDay} from '../daysOfWeek/daysOfWeek'
import {WeatherDay, WeatherTime} from '../currentData/CurrenData';
import {Container} from '../container/Container';
import {randomCity} from '../randomCity/randomCity';
import {useInitialLocation} from '../getAPI/useInitialLocation';

const URL_TODAY = 'https://api.openweathermap.org/data/2.5/weather';
const URL_FUTURE = 'https://api.openweathermap.org/data/2.5/forecast';
const WEATHER_SERVICE_KEY = '7bbcd0641391e3867da7fe524a3ce421'

///const getWeatherUrl = (lat, lon) => {
//     return `${URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
export const App = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [dataFuture, setDataFuture] = useState({});
    const [location, setLocation] = useState('');
    const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${location || randomCity}&units=metric&appid=7bbcd0641391e3867da7fe524a3ce421`;
    const urlFuture = `https://api.openweathermap.org/data/2.5/forecast?q=${location || randomCity}&units=metric&appid=7bbcd0641391e3867da7fe524a3ce421`;
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const {position, error: errorLocation} = useInitialLocation();

    useEffect(() => {
        axios.get(URL_TODAY, {
            params: {
                lat: position.lat,
                lon: position.lon,
                units: 'metric',
                appid: WEATHER_SERVICE_KEY
            }
        }).then(({data}) => {
            console.log(data)
        }).catch((error) => {
            setError(error.message);
        })
    }, [position]);

    if (error) {
        return <span>Caught a delayed error.</span>;
    }

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(urlToday).then((response) => {
                setData(response.data)
            })
            axios.get(urlFuture).then((response) => {
                setDataFuture(response.data)
            })
        }
    }

    const WeatheFutureTemperature = (key) => {
        if (dataFuture.list && dataFuture.list[key]) {
            return <span className='weather__future-temperature'>{Math.round(dataFuture.list[key].main.temp)}ºC</span>
        } else {
            return null
        }
    }


    const WeatheTodayTemperature = () => {
        if (data.main) {
            return <span
                className='weather__temperature'>{Math.round(data.main.temp)}ºC / {Math.round((data.main.temp * 9 / 5) + 32)}F</span>
        } else {
            return null
        }
    }

    const WeatheTodayFeelTemperature = () => {
        if (data.main) {
            return <span
                className='weather__temperature'>Real Feel{Math.round(data.main.feels_like)}ºC / {Math.round((data.main.feels_like * 9 / 5) + 32)}F</span>
        } else {
            return null
        }
    }

    return (
        <Container>
            <div className='container'>

                <main className='weather'>
                    <h1>{latitude}</h1>
                    <h1>{longitude}</h1>
                    <h1>{data.name}</h1>
                    <div className='search-panel'>
                        <input
                            type="text"
                            value={location}
                            onKeyPress={searchLocation}
                            onChange={event => setLocation(event.target.value)}
                            placeholder='Enter Location'/>
                    </div>


                    <div className='weather__today'>
                        <div className='weather__today-description'>
                            <WeatherDay/>
                            {WeatheTodayTemperature()}
                            <WeatherTime/>
                            {WeatheTodayFeelTemperature()}
                            <span className='weather__hamidity'>Humidity {data.main ?
                                <span>{data.main.humidity}</span> : null}%</span>
                        </div>
                        <img className='weather__today-img'
                             src={`icons/${data.weather && data.weather[0] ? data.weather[0].icon : "404"}.png`}></img>
                    </div>
                    <div className='weather__future'>
                        <div className='weather__future-item'>
                            <div className='weather__future-description '>
                                <FirstDay/>
                                {WeatheFutureTemperature(0)}
                            </div>
                            <img className='weather__future-img'
                                 src={`icons/${dataFuture.list && dataFuture.list[0] ? dataFuture.list[0].weather[0].icon : null}.png`}
                                 alt=""/>
                        </div>
                        <div className='weather__future-item'>
                            <div className='weather__future-description '>
                                <SecondDay/>
                                {WeatheFutureTemperature(1)}
                            </div>
                            <img className='weather__future-img'
                                 src={`icons/${dataFuture.list && dataFuture.list[1] ? dataFuture.list[1].weather[0].icon : null}.png`}
                                 alt=""/>
                        </div>
                        <div className='weather__future-item'>
                            <div className='weather__future-description '>
                                <ThirdDay/>
                                {WeatheFutureTemperature(2)}
                            </div>
                            <img className='weather__future-img'
                                 src={`icons/${dataFuture.list && dataFuture.list[2] ? dataFuture.list[2].weather[0].icon : null}.png`}
                                 alt=""/>
                        </div>
                        <div className='weather__future-item'>
                            <div className='weather__future-description '>
                                <FourthDay/>
                                {WeatheFutureTemperature(3)}
                            </div>
                            <img className='weather__future-img'
                                 src={`icons/${dataFuture.list && dataFuture.list[3] ? dataFuture.list[3].weather[0].icon : null}.png`}
                                 alt=""/>
                        </div>
                        <div className='weather__future-item'>
                            <div className='weather__future-description '>
                                <FifthDay/>
                                {WeatheFutureTemperature(4)}
                            </div>
                            <img className='weather__future-img'
                                 src={`icons/${dataFuture.list && dataFuture.list[4] ? dataFuture.list[4].weather[0].icon : null}.png`}
                                 alt=""/>
                        </div>
                        <div className='weather__future-item'>
                            <div className='weather__future-description '>
                                <SixthDay/>
                                {WeatheFutureTemperature(5)}
                            </div>
                            <img className='weather__future-img'
                                 src={`icons/${dataFuture.list && dataFuture.list[5] ? dataFuture.list[5].weather[0].icon : null}.png`}
                                 alt=""/>
                        </div>
                    </div>
                </main>
            </div>
        </Container>

    )
}