import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  currentTheme: string;
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
  currentTheme: 'default',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
