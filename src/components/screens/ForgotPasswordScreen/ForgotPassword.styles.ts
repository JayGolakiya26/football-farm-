import { styled } from '@utils/styled';
import Text from '@atoms/Text/Text';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Container = styled(KeyboardAwareScrollView)`
  padding: 16px;
`;

export const Heading = styled(Text)`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-top: 56px;
`;

export const Description = styled(Text)`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 16px;
  font-weight: 400;
  margin-vertical: 32px;
  margin-horizontal: 57px;
  text-align: center;
`;
