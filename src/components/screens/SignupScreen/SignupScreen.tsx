import React, { useState } from "react";
import { useAppNavigation, useAuthNavigation } from '@navigation/hooks';
import {
  SignupText,
  ButtonContainer,
  AccountText,
  WelcomeText,
  LineDraw,
  OrText,
  OrContainer,
  SignInButton,
  GuestModeText,
} from './SignupScreen.styles';
import { Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import FormTemplate from '@templates/FormTemplate/FormTemplate';
import SignupForm from '@organisms/SignupForm/SignupForm';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import { useAppTheme } from '@constants/theme';
import SocialMediaButton from '@molecules/SocialMediaButtons/SocialMediaButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isDesktopWeb } from '@constants/platform';
import { register } from "@api/auth";
import { RegistrationParams } from "src/type/api/auth";
import { useAppDispatch } from "@redux/store";
import { SignUpUserState, storeSignUpUserInfo } from "@redux/slices/auth";

const SignupScreen = () => {
  const [loading, setLoading] = useState(false);
  const { navigate } = useAuthNavigation();
  const { t } = useTranslation('signup');
  const { colors } = useAppTheme();
  const dispatch = useAppDispatch();
  const onSignupPress = (values: any) => {
    const signUpUser:SignUpUserState = {
      loginType: 1,
      ageTermsAccepted: 1,
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
    };

    dispatch(storeSignUpUserInfo(signUpUser));
  
    navigate('CreatePassword');
  };
  return (
    <ScreenTemplate isBackground={isDesktopWeb ? false : true}>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      >
        <WelcomeText>{t('welcome')}</WelcomeText>
        <SocialMediaButton />
        <OrContainer>
          <LineDraw />
          <OrText>{t('or')}</OrText>
          <LineDraw />
        </OrContainer>
        <SignupText>{t('createaccount')}</SignupText>
        <FormTemplate Component={SignupForm} onSubmit={onSignupPress} loading={loading} />
        <ButtonContainer>
          <AccountText>{t('ihaveaccount')}</AccountText>
          <SignInButton
            mode="text"
            textColor={colors.primaryColor}
            onPress={() => navigate('Login')}
          >
            {t('signin')}
          </SignInButton>
        </ButtonContainer>
        <Pressable>
          <GuestModeText>{t('guestmodetext')}</GuestModeText>
        </Pressable>
      </KeyboardAwareScrollView>
    </ScreenTemplate>
  );
};

export default SignupScreen;
