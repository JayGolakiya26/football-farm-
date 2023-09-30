import {
  DefaultTheme as RNPDefaultTheme,
  MD3DarkTheme as RNPDarkTheme,
  useTheme,
} from 'react-native-paper';

export const DefaultTheme = {
  myOwnProperty: true,
  ...RNPDefaultTheme,
  roundness: 2,
  colors: {
    ...RNPDefaultTheme.colors,
    bgColor: '#030303',
    primarygradient1: '#16CA9F',
    primarygradient2: '#1DC771',
    secondarygradient1: '#16CAC6',
    secondarygradient2: '#16CA8C',
    gradientColor1: '#170B47',
    gradientColor2: '#070518',
    buttonBG: '#635CFF',
    textColor: 'rgba(255, 255, 255, 0.80)',
    gray: 'rgba(255, 255, 255, 0.60)',
    white: '#fff',
    transparent: 'rgba(255, 255, 255, 0.08)',
    webMainBackground: '#0E1217',
    secondaryText: '#FFFFFF99',
    darkText: '#FFFFFF4D',
    darkBackground: '#161B22',
    lineColor: 'rgba(255, 255, 255, 0.24)',
    primaryColor: '#41C47E',
    placeholderTextColor: 'rgba(255, 255, 255, 0.30)',
    black: '#121212',
    disabledTextColor: 'rgba(255, 255, 255, 0.60)',
    buttonRippleColor: 'rgba(0,0,0,0)',
    errorRed: 'rgba(223, 62, 81, 0.2)',
    errorText: '#DF3E51'
  },
};

export const DarkTheme = {
  myOwnProperty: true,
  ...RNPDarkTheme,
  roundness: 2,
  colors: {
    ...RNPDarkTheme.colors,
    text: '#fff',
    white: '#fff',
    webMainBackground: '#0E1217',
    secondaryText: '#FFFFFF99',
    darkText: '#FFFFFF4D',
    darkBackground: '#161B22',
    transparent: 'rgba(255, 255, 255, 0.08)',
    lineColor: 'rgba(255, 255, 255, 0.24)',
    primaryColor: '#41C47E',
    placeholderTextColor: 'rgba(255, 255, 255, 0.30)',
    black: '#121212',
    disabledTextColor: 'rgba(255, 255, 255, 0.60)',
    primarygradient1: '#16CA9F',
    primarygradient2: '#1DC771',
    secondarygradient1: '#16CAC6',
    secondarygradient2: '#16CA8C',
    gradientColor1: '#170B47',
    gradientColor2: '#070518',
    buttonBG: '#635CFF',
    textColor: 'rgba(255, 255, 255, 0.80)',
    gray: 'rgba(255, 255, 255, 0.60)',
    buttonRippleColor: 'rgba(0,0,0,0)',
  },
};

export type AppTheme = typeof DefaultTheme;

export const useAppTheme = () => useTheme<AppTheme>();
