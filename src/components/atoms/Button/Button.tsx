import { useAppTheme } from '@constants/theme';
import React from 'react';
import { Button as RNPButton } from 'react-native-paper';
import { ButtonProps } from './Button.props';

const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  mode = 'contained',
  ...props
}) => {
  const { colors } = useAppTheme();
  let buttonColor, textColor;
  if (mode === 'contained') {
    buttonColor = colors.buttonBG;
    textColor = colors.black;
  }
  if (disabled) {
    buttonColor = colors.transparent;
    textColor = colors.black;
  }
  if (mode === 'text') {
    textColor = colors.textColor;
  }
  if (mode === 'outlined') {
    textColor = colors.textColor;
  }

  return (
    <RNPButton
      disabled={disabled}
      mode={mode}
      buttonColor={buttonColor}
      textColor={textColor}
      {...props}
    >
      {children}
    </RNPButton>
  );
};

export default Button;
