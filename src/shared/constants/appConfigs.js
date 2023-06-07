import configService from '../../config';

export const APP_CONFIGS = Object.freeze({
    URL_TODAY: configService.get('URL_TODAY'),
    URL_FORECAST: configService.get('URL_FORECAST'),
    WEATHER_SERVICE_KEY: configService.get('WEATHER_SERVICE_KEY'),
})

