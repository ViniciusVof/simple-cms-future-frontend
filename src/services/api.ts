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

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('@future:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('@future:token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export { api };
