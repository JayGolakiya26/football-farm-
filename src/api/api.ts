import axios from 'axios';
export const baseURL = 'https://tsdev.gdxsports.com/api/v1/';

export const api = axios.create({
  baseURL,
});
