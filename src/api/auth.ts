import { LoginParams, LoginResponse, RegistrationParams } from 'src/type/api/auth';
import { api } from './api';
import { AxiosPromise } from 'axios';

export const login = (body: LoginParams): AxiosPromise<LoginResponse> =>
  api.post(`/login`, body)
export const register = (body: RegistrationParams): AxiosPromise<any> => {
  return api.post('/post', body)
}  


