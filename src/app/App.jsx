import './App.scss';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {FifthDay, FirstDay, FourthDay, SecondDay, SixthDay, ThirdDay} from '../components/daysOfWeek/daysOfWeek.jsx'
import {Container} from '../components/Container/Container.jsx';
import {randomCity} from '../components/randomCity/randomCity.jsx';
import {useInitialLocation} from '../shared/hooks/useInitialLocation';
import {fetchWeather} from "../shared/api/fetchWeather.js";
import {WeatherToday} from "../components/WeatherToday";


export const App = () => {
    const [error, setError] = useState(null);
    const [dataFuture, setDataFuture] = useState({});
    const [location, setLocation] = useState('');
    const [weatherToday, setWeatherToday] = useState(null);
    const {position, error: errorLocation} = useInitialLocation(setError);
    const {getWeatherTodayByCords, getWeatherTodayByCity, getWeatherForecast, getWeatherForecastByCords} = fetchWeather();

    useEffect(() => {
        if (position) {
            getWeatherTodayByCords(position.lat, position.lon).then(({data}) => {
                setWeatherToday(data)
            }).catch(({message}) => {
                setError(message)
            });

            getWeatherForecastByCords(position.lat, position.lon).then(({data}) => {
                setDataFuture(data)
            }).catch(({message}) => {
                setError(message)
            });
        }
    }, [position]);

    const searchLocation = async (event) => {
        if (event.key === 'Enter') {
            try {
                const {data: dataToday} = await getWeatherTodayByCity(location);
                setWeatherToday(dataToday)
                const {data: dataFuture} = await getWeatherForecast(location);
                setDataFuture(dataFuture)
            } catch (e) {
                setError(e.message);
            }
        }
    }

    const WeatheFutureTemperature = (key) => {
        if (dataFuture.list && dataFuture.list[key]) {
            return <span className='weather__future-temperature'>{Math.round(dataFuture.list[key].main.temp)}ºC</span>
        } else {
            return null
        }
    }

    if (error) {
        return <span>{error}</span>;
    }

    return (
        <Container>
            <div className='container'>

                <main className='weather'>
                    <div className='search-panel'>
                        <input
                            type="text"
                            value={location}
                            onKeyPress={searchLocation}
                            onChange={event => setLocation(event.target.value)}
                            placeholder='Enter Location'/>
                    </div>


                    <WeatherToday data={weatherToday}/>
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