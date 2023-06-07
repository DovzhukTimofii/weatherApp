import React, { useEffect } from 'react';

export const useGetPosition = ({ latitude, longitude, setLatitude, setLongitude }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);
};