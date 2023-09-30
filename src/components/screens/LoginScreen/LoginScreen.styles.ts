import { styled } from '@utils/styled';
import Text from '@atoms/Text/Text';
import { View } from 'react-native';
import Button from '@atoms/Button/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const KeyboardAwareView = styled(KeyboardAwareScrollView)`
  padding: 16px;
`;

export const IntroText = styled(Text)`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;

export const LineDraw = styled(View)`
  height: 1px;
  flex: 1;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.lineColor};
`;

export const OrText = styled(Text)`
  align-self: center;
  padding-horizontal: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const OrContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  margin-vertical: 56px;
`;

export const ButtonContainer = styled(View)`
  flex-direction: row;
  margin-vertical: 16px;
  justify-content: center;
  align-items: center;
`;

export const AccountText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
`;

export const SignUpButton = styled(Button)`
  margin-left: -10px;
`;