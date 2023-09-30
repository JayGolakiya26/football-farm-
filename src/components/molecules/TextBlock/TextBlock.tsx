import React from 'react';
import { PrivacyPolicyHeaderText, PrivacyPolicyTextContent } from './TextBlock.styles';


interface TextWithHeadingType {
  headerText: string;
  subText: string;
  paddingTop?:string;
  fontHeaderSize?:string;
}
const TextBlock: React.FC<TextWithHeadingType> = ({headerText, subText,paddingTop,fontHeaderSize}) => {
  return (
    <>
      <PrivacyPolicyHeaderText variant='Inter_600SemiBold' paddingTop={paddingTop} fontHeaderSize={fontHeaderSize} >
        {headerText}
      </PrivacyPolicyHeaderText>
      <PrivacyPolicyTextContent variant='Inter_400Regular'>
        {subText}
      </PrivacyPolicyTextContent>
    </>
  )
}

export default TextBlock
