import axios from 'axios';
export const baseURL = 'https://devapi.footballfam.io/api/v1';

export const api = axios.create({
  baseURL:`${baseURL}/`
});
