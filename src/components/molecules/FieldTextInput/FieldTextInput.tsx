import React from 'react';
import { FieldTextInputProps } from './FieldTextInput.props';
import { View } from 'react-native';
import TextInput from '@atoms/TextInput/TextInput';
import FormError from '@atoms/FormError/FormError';
import CrossIcon from '@atoms/Illustrations/Cross';
import CheckIcon from '@atoms/Illustrations/Check';
import { styles } from './FieldTextInput.styles';

const FieldTextInput: React.FC<FieldTextInputProps> = ({
  input,
  meta,
  compact,
  left,
  right,
  focus,
  blur,
  password,
  ...props
}) => {
  let rightIcon = null;
  if (right) {
    if (password) {
      rightIcon = password;
    } else {
      rightIcon = !!(meta?.error && meta?.touched)
        ? () => <CrossIcon />
        : () => <CheckIcon />;
    }
  }
  return (
    <View>
      <TextInput
        value={input.value}
        onChangeText={input.onChange}
        error={meta.touched && meta.error}
        contentStyle={styles.contentStyle}
        onFocus={focus}
        onBlur={blur}
        left={left}
        right={rightIcon}
        {...props}
      />
      {password ? null : (
        <FormError
          compact={compact}
          visible={!!(meta.touched && meta.error)}
          errorId={meta.error}
        />
      )}
    </View>
  );
};

export default FieldTextInput;
