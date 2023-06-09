import './App.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FirstDay, SecondDay, ThirdDay, FourthDay, FifthDay, SixthDay } from '../daysOfWeek/daysOfWeek'
import { WeatherDay, WeatherTime } from '../currentData/CurrenData';
import { Container } from '../container/Container';
import { randomCity } from '../randomCity/randomCity';
import {useGetPosition} from '../getAPI/useGetPosition'

const URL_KAY = '7bbcd0641391e3867da7fe524a3ce421' 

export const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [dataFuture, setDataFuture] = useState({});
  const [location, setLocation] = useState('');
 
  const urlToday = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${URL_KAY}`;
  const urlFuture = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${URL_KAY}`;
  const urlTodayLocation = `https://api.openweathermap.org/data/2.5/weather?q=${location || randomCity}&units=metric&appid=${URL_KAY}`;
  const urlFutureLocation = `https://api.openweathermap.org/data/2.5/forecast?q=${location || randomCity}&units=metric&appid=${URL_KAY}`;
  
  useGetPosition({setLatitude, setLongitude})
  
  
  useEffect(() => {
    if (longitude && latitude ) {
        axios.get(urlToday).then((response) => {
            setData(response.data);
        }).catch((error) => {
          setError(error);
        });
        axios.get(urlFuture).then((response) => {
            setDataFuture(response.data);
        }).catch((error) => {
          setError(error);
        });
        setLocation('')
    } 
  }, [longitude, latitude]);

  if (error) {
    return <span>Caught a delayed error.</span>;
  }

  const searchLocation = (event) => {
          if (event.key === 'Enter') {
              axios.get(urlTodayLocation).then((response) => {
                  setData(response.data)
              })
              setLocation('')
          }
          if (event.key === 'Enter') {
              axios.get( urlFutureLocation).then((response) => {
                  setDataFuture(response.data)
              })
              setLocation('')
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
          return <span className='weather__temperature' >{Math.round(data.main.temp)}ºC / {Math.round((data.main.temp * 9/5) + 32)}F</span>
      } else {
          return null
      }
  }

  const WeatheTodayFeelTemperature = () => {
      if (data.main) {
          return <span className='weather__temperature' >Real Feel{Math.round(data.main.feels_like)}ºC / {Math.round((data.main.feels_like * 9/5) + 32)}F</span>
      } else {
          return null
      }
  }
  console.log(longitude)
  
  return (
    <Container>
        <div className='container'>

            <main className='weather'>
                <h1>{data.name}</h1>
                <div className='search-panel'>
                    <input 
                        type="text" 
                        value={location}
                        onKeyDown={searchLocation}
                        onChange={event => setLocation(event.target.value)}
                        placeholder='Enter Location'/>
                </div>
              

                <div className='weather__today'>
                    <div className='weather__today-description'>
                        <WeatherDay/>
                        {WeatheTodayTemperature()}
                        <WeatherTime/>
                        {WeatheTodayFeelTemperature()}
                        <span className='weather__hamidity'>Humidity {data.main ? <span>{data.main.humidity}</span> : null}%</span>
                    </div>
                    <img className='weather__today-img' src={`icons/${data.weather && data.weather[0] ? data.weather[0].icon : "404"}.png`}></img>
                </div>
                <div className='weather__future'>
                    <div className='weather__future-item'>
                        <div className='weather__future-description '>
                            <FirstDay/>
                            {WeatheFutureTemperature(0)}
                        </div>
                        <img className='weather__future-img' src={`icons/${dataFuture.list && dataFuture.list[0] ? dataFuture.list[0].weather[0].icon : null}.png`} alt="" />
                    </div>
                    <div className='weather__future-item'>
                        <div className='weather__future-description '>
                            <SecondDay/>
                            {WeatheFutureTemperature(1)}
                        </div>
                        <img className='weather__future-img' src={`icons/${dataFuture.list && dataFuture.list[1] ? dataFuture.list[1].weather[0].icon : null}.png`} alt="" />
                    </div>
                    <div className='weather__future-item'>
                        <div className='weather__future-description '>
                            <ThirdDay/>
                            {WeatheFutureTemperature(2)}
                        </div>
                        <img className='weather__future-img' src={`icons/${dataFuture.list && dataFuture.list[2] ? dataFuture.list[2].weather[0].icon : null}.png`} alt="" />
                    </div>
                    <div className='weather__future-item'>
                        <div className='weather__future-description '>
                            <FourthDay/>
                            {WeatheFutureTemperature(3)}
                        </div>
                        <img className='weather__future-img' src={`icons/${dataFuture.list && dataFuture.list[3] ? dataFuture.list[3].weather[0].icon : null}.png`} alt="" />
                    </div>
                    <div className='weather__future-item'>
                        <div className='weather__future-description '>
                            <FifthDay/>
                            {WeatheFutureTemperature(4)}
                        </div>
                        <img className='weather__future-img' src={`icons/${dataFuture.list && dataFuture.list[4] ? dataFuture.list[4].weather[0].icon : null}.png`} alt="" />
                    </div>
                    <div className='weather__future-item'>
                        <div className='weather__future-description '>
                            <SixthDay/>
                            {WeatheFutureTemperature(5)}
                        </div>
                        <img className='weather__future-img' src={`icons/${dataFuture.list && dataFuture.list[5] ? dataFuture.list[5].weather[0].icon : null}.png`} alt="" />
                    </div>
                </div>
            </main>
        </div>
    </Container>
      
  )
}