import React from 'react';
import '@assets/images/index';
import { HeaderWithTextContainer, TextInHeader } from './TitleWithButton.styles';

interface ButtonWithTextProps {
  text?: string;
  image: React.FC;
}

const TitleWithButton: React.FC<ButtonWithTextProps> = ({text,image: SvgComponent}) => {
  return (
    <HeaderWithTextContainer>
      <SvgComponent />
      <TextInHeader variant='Inter_600SemiBold'>{text ? text : ''}</TextInHeader>
    </HeaderWithTextContainer>
  )
}

export default TitleWithButton;
