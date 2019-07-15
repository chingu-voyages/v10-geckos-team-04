import darkSkyAPI from '../api/darkSkyAPI.js';
import {APIkeyDarkSky} from '../api/keys.js';

export const fetchWeather = () => async dispatch =>{
  const response = await darkSkyAPI.get('/'+APIkeyDarkSky+'/'+'40.5860,-73.9440');

  dispatch ({ type: 'FETCH_WEATHER', payload: response})
};
