import axios from 'axios';
import CONFIG from '../config';
const api = axios.create({
  baseURL: CONFIG.API_URI,
});

export default api;
