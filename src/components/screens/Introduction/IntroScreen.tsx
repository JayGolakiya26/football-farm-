import React from 'react';
import Swiper from 'react-native-swiper';
import Images from '@assets/images/index';
import {Spacer} from '@atoms/common/common.styles';
import Button from '@atoms/Button/Button';
import {useAuthNavigation} from '@navigation/hooks';
import {
  BackgroundImage,
  Container,
  Label,
  Description,
  ButtonContainer,
  SliderContainer,
} from './IntroScreen.styles';
import {useAppTheme} from '@constants/theme';
import {useTranslation} from 'react-i18next';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import GradientButton from '@atoms/GradientButton/GradientButton';
import ArrowRightIcon from '@assets/icons/ArrowRight.svg';
import {isDesktopWeb} from '@constants/platform';

const Introduction: React.FC = () => {
  const {navigate} = useAuthNavigation();
  const {colors} = useAppTheme();
  const {t} = useTranslation('slides');
  const slides = [
    {
      id: 1,
      text: t('text1'),
      subtext: t('subtext1'),
      backgroundImage: Images.intro1,
    },
    {
      id: 2,
      text: t('text2'),
      subtext: t('subtext2'),
      backgroundImage: Images.intro2,
    },
    {
      id: 3,
      text: t('text3'),
      subtext: t('subtext3'),
      backgroundImage: Images.intro3,
    },
  ];
  return (
    <ScreenTemplate isBackground>
      <Swiper
        loop={false}
        autoplay={isDesktopWeb ? true : false}
        index={0}
        activeDotColor={colors.white}
        dotColor={colors.gray}
      >
        {slides &&
          slides.map((item, index) => (
            <SliderContainer key={index}>
              <BackgroundImage
                source={item.backgroundImage}
                resizeMode="cover"
              />
              <Container key={index}>
                <Label>{item.text}</Label>
                <Spacer size={15} />
                <Description>{item.subtext}</Description>
              </Container>
            </SliderContainer>
          ))}
      </Swiper>
      {!isDesktopWeb && (
        <ButtonContainer>
          <Button labelStyle={{color: colors.gray}} mode="text">
            {t('skip')}
          </Button>
          <GradientButton
            onPress={() => navigate('Signup')}
            icon={() => <ArrowRightIcon />}
            circle
            bgColor={[colors.secondarygradient1, colors.secondarygradient2]}
          />
        </ButtonContainer>
      )}
    </ScreenTemplate>
  );
};
export default Introduction;
