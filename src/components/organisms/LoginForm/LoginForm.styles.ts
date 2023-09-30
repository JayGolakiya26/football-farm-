import { styled } from '@utils/styled';
import Text from '@atoms/Text/Text';
import { View } from 'react-native';

export const ForgotText = styled(Text)`
  font-size: 14px;
  font-weight: 800;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ErrorView = styled(View)`
  background-color: ${({ theme }) => theme.colors.errorRed};
  margin-vertical: 30px;
  padding: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.errorText};
  margin-left: 5px;
`;
