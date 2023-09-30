import React from 'react';
import { useTranslation } from 'react-i18next';
import { HelperText } from 'react-native-paper';
import { FormErrorProps } from './FormError.props';

const FormError = ({
  visible,
  errorId,
  text,
  compact,
  ...rest
}: FormErrorProps) => {
  const { t } = useTranslation('errors');

  if (compact && !visible) {
    return null;
  }

  return (
    <HelperText type="error" visible={visible} padding="none" {...rest}>
      {errorId ? t(errorId) : text}
    </HelperText>
  );
};

FormError.defaultProps = {
  visible: false,
  compact: false,
};

export default FormError;
