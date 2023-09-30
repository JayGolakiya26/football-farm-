import React, { useState } from 'react';
import { Field } from 'react-final-form';
import { LoginFormProps } from './LoginForm.props';
import {
  composeValidators,
  emailValidator,
  requiredValidator,
} from '@utils/formValidators';
import FieldTextInput from '@molecules/FieldTextInput/FieldTextInput';
import { useTranslation } from 'react-i18next';
import { useSelector } from '@redux/store';
import EmailIcon from '@atoms/Illustrations/Email';
import LockIcon from '@atoms/Illustrations/Lock';
import { useAppTheme } from '@constants/theme';
import EyeCloseIcon from '@atoms/Illustrations/EyeClose';
import EyeOpenIcon from '@atoms/Illustrations/EyeOpen';
import HintIcon from '@atoms/Illustrations/HintIcon';
import { ForgotText, ErrorView, ErrorText } from './LoginForm.styles';
import GradientButton from '@atoms/GradientButton/GradientButton';
import { Pressable } from 'react-native';
import { useAuthNavigation } from '@navigation/hooks';
import { selectIsAuthLoading } from '@redux/slices/auth';
import { useFormState } from 'react-final-form';

const LoginForm: React.FC<LoginFormProps> = ({ form }) => {
  const { t } = useTranslation('login');
  const { navigate } = useAuthNavigation();
  const [isActive, setIsActive] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { colors } = useAppTheme();
  const isLoading = useSelector(selectIsAuthLoading);
  const { valid } = useFormState({ subscription: { valid: true } });

  const handleFocus = () => {
    setIsActive(true);
  };
  const onFocus = () => {
    setIsActivePassword(true);
  };
  const handleBlur = () => {
    setIsActive(false);
    setIsActivePassword(false);
  };
  return (
    <>
      <Field
        name="email"
        component={FieldTextInput}
        validate={composeValidators(requiredValidator, emailValidator)}
        keyboardType="email-address"
        returnKeyType="done"
        placeholder={t('email')}
        label={t('emaillabel')}
        focus={handleFocus}
        blur={handleBlur}
        left={() => (
          <EmailIcon color={isActive ? colors.primaryColor : colors.gray} />
        )}
      />
      <Field
        name="password"
        component={FieldTextInput}
        validate={requiredValidator}
        returnKeyType="done"
        placeholder={t('password')}
        label={t('passwordlabel')}
        focus={onFocus}
        blur={handleBlur}
        left={() => (
          <LockIcon color={isActivePassword ? colors.primaryColor : colors.gray} />
        )}
        password={
          secureTextEntry == true
            ? () => (
                <EyeCloseIcon
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              )
            : () => (
                <EyeOpenIcon onPress={() => setSecureTextEntry(!secureTextEntry)} />
              )
        }
        right
        secureTextEntry={secureTextEntry}
      />
      <Pressable onPress={() => navigate('Forgot')}>
        <ForgotText>{t('forgot')}</ForgotText>
      </Pressable>
      <ErrorView>
        <HintIcon />
        <ErrorText>{t('errortext')}</ErrorText>
      </ErrorView>
      <GradientButton
        loading={isLoading}
        onPress={form.submit}
        textColor={valid ? colors.black : colors.disabledTextColor}
        disabled={valid ? false : true}
      >
        {t('continue')}
      </GradientButton>
    </>
  );
};

export default LoginForm;
