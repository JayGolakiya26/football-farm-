import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "@redux/actions/auth";
import { RootState } from "@redux/store";
import { SignUpUserState } from "src/type/api/slice/auth";

export interface AuthState {
  token?: string;
  user?: object;
  isLoading?: boolean;
  signUpUser?: SignUpUserState; 
}

const initialState: AuthState = {
  token: undefined,
  user: undefined,
  isLoading: false,
  signUpUser: {
    loginType: 1,
    ageTermsAccepted: 0,
    firstName: "",
    lastName: undefined,
    email: "",
    referenceNumber: undefined,
  },
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
    storeSignUpUserInfo: (state, action: PayloadAction<SignUpUserState>) => {
      state.signUpUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    const sharedLoadingReset = (state: AuthState) => {
      state.isLoading = false;
    };

    builder.addCase(loginUserAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state,action)=>{
      sharedLoadingReset(state)
      console.log(action.payload)
    });
    builder.addCase(loginUserAction.rejected, sharedLoadingReset);
  },
});

export const { logout, storeSignUpUserInfo } = authSlice.actions;
export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
export default authSlice.reducer;
