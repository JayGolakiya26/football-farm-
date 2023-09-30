import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "@redux/actions/auth";
import { RootState } from "@redux/store";
export interface AuthState {
  token?: string;
  user?: object;
  isLoading?: boolean;
}

const initialState: AuthState = {
  token: undefined,
  user: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    const sharedLoadingReset = (state: AuthState) => {
      state.isLoading = false;
    };

    builder.addCase(loginUserAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUserAction.fulfilled, sharedLoadingReset);
    builder.addCase(loginUserAction.rejected, sharedLoadingReset);
  },
});

export const { logout } = authSlice.actions;
export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
export default authSlice.reducer;
