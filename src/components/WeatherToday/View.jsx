import {WeatherDay, WeatherTime} from "../currentData/CurrenData.jsx";
import  './View.scss';

const View = ({data}) => {
    const currentWeather = data?.weather?.at(0);
    const icon = currentWeather?.icon ?? '404'
    const temperatureToday = data?.main?.temp && `${Math.round(data.main.temp)}ºC / ${Math.round((data.main.temp * 9 / 5) + 32)}`
    const realFeel = data?.main?.feels_like && `${Math.round(data.main.feels_like)}ºC / ${Math.round((data.main.feels_like * 9 / 5) + 32)}F`
    const humidity = `${data?.main && data.main.humidity}%`


    return (
        <div className='weather__today'>
            <div className='weather__today-description'>
                <WeatherDay/>
                <div className='weather__temperature'>{temperatureToday}</div>
                <WeatherTime/>
                <div className='weather__temperature'>Real Feel {realFeel}</div>
                <span className='weather__hamidity'>Humidity {humidity}</span>
            </div>
            <img className='weather__today-img' src={`icons/${icon}.png`} alt='today icon'/>
        </div>
    )
}

export default View;