import React, { useEffect } from 'react';

export const GetAPI = ({ latitude, longitude, setLatitude, setLongitude }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude.toFixed(2));
      setLongitude(position.coords.longitude.toFixed(2));
    });
  }, []);

};