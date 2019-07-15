import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.darksky.net/forecast'
});
