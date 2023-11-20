import { AxiosResponse } from 'axios';
import { api } from './api';

export const get = <T>(path: string): Promise<AxiosResponse<T>> => api.get<T>(`${path}`);

export const post = <T>(path: string, params: any): Promise<AxiosResponse<T>> => api.post<T>(`${path}`, params);

export const put = <T>(path: string, params: any): Promise<AxiosResponse<T>> => api.put<T>(`${path}`, params);

export const patch = <T>(path: string, params: any): Promise<AxiosResponse<T>> => api.patch<T>(`${path}`, params);

export const remove = <T>(path: string): Promise<AxiosResponse<T>> => api.delete<T>(`${path}`);

export const handleRequestError = (status: number): boolean => {
  if (status === 401 || status === 429 || status === 500) {
    return true;
  }
  return false;
};
