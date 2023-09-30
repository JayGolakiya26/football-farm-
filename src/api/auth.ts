import { LoginParams, LoginResponse, RegistrationParams, RegistrationResponse } from 'src/type/api/auth';
import { api } from './api';
import { AxiosPromise } from 'axios';

export const login = (body: LoginParams): AxiosPromise<LoginResponse> =>
  api.post(`/login`, body)
  export const register = (body: RegistrationParams): AxiosPromise<RegistrationResponse> => {
    return api.post('/register', body,{
      headers:{
        'Content-Type': 'application/json',
      }
    })
  } 


