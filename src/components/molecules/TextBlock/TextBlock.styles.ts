import { styled } from '@utils/styled';
import Text from '@atoms/Text/Text';

export const PrivacyPolicyHeaderText = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  padding-top: ${({ paddingTop }) => paddingTop || 32}px;
  font-size:${({ fontHeaderSize }) => fontHeaderSize || 18}px;
`
export const PrivacyPolicyTextContent = styled(Text)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondaryText};
  padding-top: 16px;
  line-height: 22px;
`