import React from 'react';
import {SafeAreaViewProps} from 'react-native-safe-area-context';
import {
  SafeAreaContainer,
  BackgroundImage,
  Container,
} from './ScreenTemplate.styles';
import images from '@assets/images';

const ScreenTemplate: React.FC<{
  children: React.ReactNode;
  safeAreaProps?: SafeAreaViewProps;
  isBackground?: boolean;
}> = ({children, safeAreaProps, isBackground}) => {
  return (
    <SafeAreaContainer {...safeAreaProps} isBackground={!!isBackground}>
      <BackgroundImage
        source={isBackground && images.background}
        resizeMode="cover"
      >
        <Container>{children}</Container>
      </BackgroundImage>
    </SafeAreaContainer>
  );
};

export default ScreenTemplate;
