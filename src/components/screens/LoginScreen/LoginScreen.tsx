import React from 'react';
import {
  IntroText,
  OrContainer,
  LineDraw,
  OrText,
  ButtonContainer,
  AccountText,
  SignUpButton,
  KeyboardAwareView,
} from './LoginScreen.styles';
import { useAuthNavigation } from '@navigation/hooks';
import { useTranslation } from 'react-i18next';
import { loginUserAction } from '@redux/actions/auth';
import { useAppDispatch } from '@redux/store';
import { LoginFormValues } from '@organisms/LoginForm/LoginForm.props';
import FormTemplate from '@templates/FormTemplate/FormTemplate';
import LoginForm from '@organisms/LoginForm/LoginForm';
import SocialMediaButton from '@molecules/SocialMediaMobile/SocialMediaMobile';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import { useAppTheme } from '@constants/theme';
import TitleWithButton from '@molecules/TitleWithButton/TitleWithButton';
import ArrowLeft from '@atoms/Illustration/ArrowLeft';
import {isDesktopWeb} from '@constants/platform';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useAuthNavigation();
  const { colors } = useAppTheme();
  const { t } = useTranslation('login');
  const onLoginPress = async (values: LoginFormValues) => {
    try {
      await dispatch(
        loginUserAction({
          email: values.email,
          password: values.password,
        })
      ).unwrap();
      navigate('Welcome')
    } catch (error: any) {
      console.log('error', error);
    }
  };
  return (
    <ScreenTemplate isBackground={isDesktopWeb ? false : true}>
      <KeyboardAwareView>
      <TitleWithButton image={ArrowLeft} />
        <IntroText>{t('signin')}</IntroText>
        <FormTemplate
          Component={LoginForm}
          onSubmit={onLoginPress}
          containerStyle={{ flex: undefined }}
        />
        <OrContainer>
          <LineDraw />
          <OrText>{t('or')}</OrText>
          <LineDraw />
        </OrContainer>
        <SocialMediaButton />
        <ButtonContainer>
          <AccountText>{t('donthaveaccount')}</AccountText>
          <SignUpButton
            mode="text"
            textColor={colors.primaryColor}
            onPress={() => navigate('Signup')}
          >
            {t('signup')}
          </SignUpButton>
        </ButtonContainer>
      </KeyboardAwareView>
    </ScreenTemplate>
  );
};

export default LoginScreen;
