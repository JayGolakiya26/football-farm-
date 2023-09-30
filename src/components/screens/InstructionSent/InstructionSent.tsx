import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthNavigation } from '@navigation/hooks';
import GradientButton from '@atoms/GradientButton/GradientButton';
import { useAppTheme } from '@constants/theme';
import {
  TitleText,
  Description,
  Email,
  Container,
  MailImage,
} from './InstructionSent.styles';
import images from '@assets/images/index';
import TitleWithButton from '@molecules/TitleWithButton/TitleWithButton';
import ArrowLeftIcon from '@atoms/Illustration/ArrowLeft';
import {isDesktopWeb} from '@constants/platform';

const InstructionSent = ({ route }) => {
  const { t } = useTranslation(['instructionsent']);
  const { colors } = useAppTheme();
  const { navigate } = useAuthNavigation();
  const { email } = route.params;
  const onMailPress = () => {
    navigate('Reset');
  };
  return (
    <ScreenTemplate isBackground={isDesktopWeb ? false : true}>
      <Container>
        <TitleWithButton image={ArrowLeftIcon} />
        <TitleText>{t('title')}</TitleText>
        <Description>
          {t('description1')} <Email>{email}</Email>
          {t('description2')}
        </Description>
        <MailImage source={images.instructionsent} resizeMode="contain" />
        <GradientButton onPress={onMailPress} textColor={colors.black}>
          {t('mail')}
        </GradientButton>
      </Container>
    </ScreenTemplate>
  );
};

export default InstructionSent;
