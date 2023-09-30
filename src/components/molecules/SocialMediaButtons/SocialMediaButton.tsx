import React from 'react';
import {SocialButton} from './SocialMediaButton.styles';
import FacebookIcon from '@atoms/Illustrations/Facebook';
import {useTranslation} from 'react-i18next';
import {Image} from 'react-native';
import images from '@assets/images/index';

const SocialMediaButton = () => {
  const {t} = useTranslation('socialmedia');
  return (
    <>
      <SocialButton mode="outlined" icon={() => <FacebookIcon />}>
        {t('facebook')}
      </SocialButton>
      <SocialButton
        mode="outlined"
        icon={() => <Image source={images.google} resizeMode="contain" />}
      >
        {t('google')}
      </SocialButton>
    </>
  );
};

export default SocialMediaButton;
