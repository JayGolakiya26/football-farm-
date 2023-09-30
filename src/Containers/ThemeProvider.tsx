import React, { memo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DarkTheme, DefaultTheme } from '@constants/theme';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { useSelector } from '@redux/store';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const CombinedDefaultTheme = merge(DefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(DarkTheme, NavigationDarkTheme);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    const { currentTheme } = useSelector((state) => state.theme);

    const theme =
      currentTheme === 'default' ? CombinedDefaultTheme : CombinedDarkTheme;

    return (
      <StyledThemeProvider theme={theme}>
        <PaperProvider theme={theme} children={children} />
      </StyledThemeProvider>
    );
  },
);

export default ThemeProvider;
