export interface LoginParams {
  email: string;
  password: string;
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
  data: {
    id: string;
    name: string;
    email: string;
    role: {
      role_slug: string;
    };
    token: string;
    user_data: {
      country_id: string;
      first_name: string;
      last_name: string;
      mobile_number: string;
    };
    medias_model: MediaModel[];
    unique_number: string;
    notification_channels: string[];
  };
  msg: string;
  status: number;
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