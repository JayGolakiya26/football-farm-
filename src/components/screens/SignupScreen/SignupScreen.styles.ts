import { styled } from '@utils/styled';
import Text from '@atoms/Text/Text';
import { View } from 'react-native';
import Button from '@atoms/Button/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const KeyboardScrollView = styled(KeyboardAwareScrollView)`
  padding: 16px;
`;

export const SignupText = styled(Text)`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-vertical: 24px;
`;

export const ButtonContainer = styled(View)`
  flex-direction: row;
  margin-vertical: 8px;
  justify-content: center;
  align-items: center;
`;

export const AccountText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
`;

export const WelcomeText = styled(Text)`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-vertical: 16px;
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
  margin-top: 16px;
`;

export const SignInButton = styled(Button)`
  margin-left: -10px;
`;

export const GuestModeText = styled(Text)`
  color: ${({ theme }) => theme.colors.placeholderTextColor};
  text-align: center;
  font-size: 14px;
  margin-vertical: 14px;
`;
