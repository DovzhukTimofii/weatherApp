import axios from "axios";
import {APP_CONFIGS} from "../constants/appConfigs.js";

export const fetchWeather =  () => {

    const defaultParams = {
        units: 'metric',
        appid: APP_CONFIGS.WEATHER_SERVICE_KEY
    }
    const getWeatherTodayByCords = async (lat, lon) => {
        return  axios.get(APP_CONFIGS.URL_TODAY, {
            params: {
                lat: lat,
                lon: lon,
                ...defaultParams
            }
        })
    };

    const getWeatherForecastByCords  = async (lat, lon) => {
        return  axios.get(APP_CONFIGS.URL_FORECAST, {
            params: {
                lat: lat,
                lon: lon,
                ...defaultParams
            }
        })
    }

    const getWeatherTodayByCity = async (city) => {
        return axios.get(APP_CONFIGS.URL_TODAY, {
            params: {
                q: city,
                ...defaultParams
            }
        })
    }

    const getWeatherForecast = async (city) => {
        return axios.get(APP_CONFIGS.URL_FORECAST, {
            params: {
                q: city,
                units: 'metric',
                appid: APP_CONFIGS.WEATHER_SERVICE_KEY
            }
        })
    }

    return {
        getWeatherTodayByCords,
        getWeatherTodayByCity,
        getWeatherForecastByCords,
        getWeatherForecast
    }
}