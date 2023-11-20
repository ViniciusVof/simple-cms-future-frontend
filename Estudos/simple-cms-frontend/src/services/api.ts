import axios, { AxiosInstance } from 'axios';

const SECONDS_TIMEOUT = 20;

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'Content-type': 'application/json',
    Accept: '*/*',
  },
  timeout: SECONDS_TIMEOUT * 1000,
});

export { api };
