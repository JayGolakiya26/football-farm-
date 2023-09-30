import React from 'react';
import {
  SocialButtonContainer,
  SocialButton,
  styles,
} from './SocialMediaMobile.styles';
import FacebookIcon from '@atoms/Illustrations/Facebook';
import AppleIcon from '@atoms/Illustration/AppleIcon';
import { Image } from 'react-native';
import images from '@assets/images/index';

const SocialMediaButton = () => {
  return (
    <SocialButtonContainer>
      <SocialButton
        mode="outlined"
        contentStyle={styles.icon}
        icon={() => <FacebookIcon />}
      />
      <SocialButton
        mode="outlined"
        contentStyle={styles.icon}
        icon={() => <Image source={images.google} resizeMode='contain' />}
      />
      <SocialButton
        mode="outlined"
        contentStyle={styles.icon}
        icon={() => <AppleIcon />}
      />
    </SocialButtonContainer>
  );
};

export default SocialMediaButton;
