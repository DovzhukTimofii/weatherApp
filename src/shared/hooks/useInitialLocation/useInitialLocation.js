import React, {useEffect} from 'react';

export const useInitialLocation = (setError) => {
    const [position, setPosition] = React.useState({lat: 0, lon: 0});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
                setPosition({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            }, (error) => {
                setError(error.message)
            }
        );
    }, []);

    return {
        position
    }
};