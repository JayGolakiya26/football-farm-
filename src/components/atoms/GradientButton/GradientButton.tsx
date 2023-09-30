import {useAppTheme} from '@constants/theme';
import React from 'react';
import {Button as RNPButton} from 'react-native-paper';
import {CustomButtonProps} from './GradientButton.props';
import {Gradient} from './GradientButton.styles';
const GradientButton: React.FC<CustomButtonProps> = ({
  bgColor,
  children,
  mode,
  circle,
  disabled,
  textColor,
  ...props
}) => {
  const {colors} = useAppTheme();
  let height, width, radius, padding;
  if (circle) {
    height = 55;
    width = 55;
    radius = 50;
  } else {
    radius = 4;
    padding = 9;
  }
  if (disabled) {
    bgColor = [colors.transparent, colors.transparent];
  }
  return (
    <Gradient
      style={{
        padding,
        height,
        width,
        borderRadius: radius,
      }}
      colors={bgColor || [colors.primarygradient1, colors.primarygradient2]}
      start={{x: 0.12, y: 0}}
      end={{x: 1, y: 0.12}}
    >
      <RNPButton
        mode={mode}
        textColor={textColor}
        rippleColor={colors.buttonRippleColor}
        {...props}
      >
        {children}
      </RNPButton>
    </Gradient>
  );
};
export default GradientButton;
