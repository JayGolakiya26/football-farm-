import { UserLoginType } from "./User";

export interface LoginParams {
  email: string;
  password?: string;
  login_type:UserLoginType;
  reference_number?:string;
}
export interface MediaModel {
  medias_id: number;
  model_id: number;
  original_url: string;
  file_name: string;
  description: string;
  model_type: string;
  created_at: string;
  title: string;
}
export interface LoginResponse {
  status: boolean;
  data: {
    name: string;
    email: string;
    login_type: string;
    reference_number: string;
    user_role: number;
    id: number;
    token: string;
  };
}
export interface RegistrationParams {
  firstName?: string;
  lastName?: string;
  username?: string;
  email: string;
  password: string;
}
export interface ApiResponse {
  status: number;
  msg: string;
}
export interface RegistrationResponse {
  status: boolean;
  data: {
    name: string;
    email: string;
    login_type: UserLoginType;
    reference_number: null | string;
    user_role: string;
    id: number;
    token: string;
  };
}