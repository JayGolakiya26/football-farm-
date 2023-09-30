import React from 'react';
import {Flexed} from '@atoms/common/common.styles';
import {
  BackGroundView,
  CloseIconContainer,
  Container,
  FormContainer,
  ImageContainer,
  SliderContainer,
} from './NonAuthTemplate.styles';
import AppLogo from '@atoms/Illustrations/AppLogo';
import CloseIcon from '@atoms/Illustrations/Close';
import BackgroundWeb from '@atoms/Illustrations/BackgroundWeb';

const AuthTemplate: React.FC<{
  leftChildren?: React.ReactNode;
  RightChildren?: React.ReactNode;
}> = ({leftChildren, RightChildren}) => {
  return (
    <Flexed>
      {!leftChildren && (
        <BackGroundView>
          <BackgroundWeb />
        </BackGroundView>
      )}
      <Container>
        {leftChildren && <SliderContainer>{leftChildren}</SliderContainer>}
        <FormContainer isBackground={leftChildren ? true : false}>
          <CloseIconContainer>
            <CloseIcon />
          </CloseIconContainer>
          <ImageContainer>
            <AppLogo />
          </ImageContainer>
          {RightChildren && <SliderContainer>{RightChildren}</SliderContainer>}
        </FormContainer>
      </Container>
    </Flexed>
  );
};
export default AuthTemplate;
