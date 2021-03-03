import { AxiosResponse } from 'axios';
import api from '../utils/api';

function requestAll(): Promise<AxiosResponse<any>> {
  return api.get('news');
}

function requestFeatured(): Promise<AxiosResponse<any>> {
  return api.get('featured');
}

function get(id: number): Promise<AxiosResponse<any>> {
  return api.get(`news/${id}`);
}

export default {
  requestAll,
  requestFeatured,
  get,
};
