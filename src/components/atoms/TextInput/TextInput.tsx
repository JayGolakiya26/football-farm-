import React from 'react';
import { Text } from 'react-native-paper';
import { CustomTextInputProps } from './TextInput.props';
import { useAppTheme } from '@constants/theme';
import { RNPTextInput, styles } from './TextInput.styles';

const TextInput: React.FC<CustomTextInputProps> = ({
  left,
  right,
  label,
  ...props
}) => {
  const { colors } = useAppTheme();
  return (
    <>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <RNPTextInput
        mode="outlined"
        outlineColor={colors.transparent}
        outlineStyle={styles.border}
        textColor={colors.textColor}
        activeOutlineColor={colors.primarygradient1}
        cursorColor={colors.textColor}
        placeholderTextColor={colors.placeholderTextColor}
        left={left && <RNPTextInput.Icon icon={left} />}
        right={right && <RNPTextInput.Icon icon={right} />}
        {...props}
      />
    </>
  );
};
export default TextInput;