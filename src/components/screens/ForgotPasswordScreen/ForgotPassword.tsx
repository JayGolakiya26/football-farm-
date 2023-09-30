import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FormTemplate from '@templates/FormTemplate/FormTemplate';
import { useAuthNavigation } from '@navigation/hooks';
import { Container, Heading, Description } from './ForgotPassword.styles';
import ForgotForm from '@organisms/ForgotPasswordForm/ForgotPasswordForm';
import { ForgotFormValues } from '@organisms/ForgotPasswordForm/ForgotPasswordForm.props';
import TitleWithButton from '@molecules/TitleWithButton/TitleWithButton';
import ArrowLeft from '@atoms/Illustration/ArrowLeft';
import {isDesktopWeb} from '@constants/platform';

const ForgotScreen = () => {
  const { t } = useTranslation(['forgotpassword']);
  const { navigate } = useAuthNavigation();
  const onForgotPress = async (values: ForgotFormValues) => {
    navigate('InstructionSent', { email: values.email });
  };
  return (
    <ScreenTemplate isBackground={isDesktopWeb ? false : true}>
      <Container>
        <TitleWithButton image={ArrowLeft} />
        <Heading>{t('forgottext')}</Heading>
        <Description>{t('forgotdescription')}</Description>
        <FormTemplate Component={ForgotForm} onSubmit={onForgotPress} />
      </Container>
    </ScreenTemplate>
  );
};

export default ForgotScreen;
