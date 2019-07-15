import axios from 'axios';
import { APIkeyDarkSky } from './key.js'

export default axios.create({
  baseURL: 'https://api.darksky.net/forecast'
});
