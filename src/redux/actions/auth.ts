import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginParams, LoginResponse } from 'src/type/api/auth';
import { login } from '@api/auth';
import {withToastForError} from '@utils/thunk'

export const loginUserAction = createAsyncThunk(
  'auth/loginUser',
  withToastForError<LoginParams, LoginResponse>(async (data) => {
    const response = await login(data);
    return response.data;
  }),
);
