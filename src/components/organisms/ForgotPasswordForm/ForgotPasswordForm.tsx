import React, { useState } from 'react';
import { Field } from 'react-final-form';
import {
  composeValidators,
  emailValidator,
  requiredValidator,
} from '@utils/formValidators';
import FieldTextInput from '@molecules/FieldTextInput/FieldTextInput';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '@constants/theme';
import { ForgotFormProps } from './ForgotPasswordForm.props';
import GradientButton from '@atoms/GradientButton/GradientButton';
import EmailIcon from '@atoms/Illustrations/Email';
import { useFormState } from 'react-final-form';

const ForgotForm: React.FC<ForgotFormProps> = ({ form }) => {
  const { t } = useTranslation(['forgotpassword']);
  const [isActive, setIsActive] = useState(false);
  const { colors } = useAppTheme();
  const handleBlur = () => {
    setIsActive(false);
  };
  const handleFocus = () => {
    setIsActive(true);
  };
  const { valid } = useFormState({ subscription: { valid: true } });

  return (
    <>
      <Field
        name="email"
        label={t('forgotemail')}
        placeholder={t('forgotlabel')}
        component={FieldTextInput}
        validate={composeValidators(emailValidator, requiredValidator)}
        keyboardType="email-address"
        returnKeyType="done"
        focus={handleFocus}
        blur={handleBlur}
        left={() => (
          <EmailIcon color={isActive ? colors.primaryColor : colors.gray} />
        )}
      />
      <GradientButton
        onPress={form.submit}
        textColor={valid ? colors.black : colors.disabledTextColor}
        disabled={valid ? false : true}
      >
        {t('send')}
      </GradientButton>
    </>
  );
};

export default ForgotForm;
