import React, { useState, useEffect } from 'react';

export const WeatherDay = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-us', {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  return <h2 className='weather__day'>{formattedDate}</h2>;
}

export const WeatherTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); 

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = `${currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours()}:${currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()}`;

  return <span className='weather__time'>{formattedTime}</span>;
}