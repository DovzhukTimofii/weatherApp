import React, {useEffect} from 'react';

export const useInitialLocation = () => {
    const [position, setPosition] = React.useState({lat: 0, lon: 0});
    const [error, setError] = React.useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
                console.log('position', position)
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
        position,
        error
    }
};