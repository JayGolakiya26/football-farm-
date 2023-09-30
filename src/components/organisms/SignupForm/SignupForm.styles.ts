import { styled } from '@utils/styled';
import { Field } from 'react-final-form';
import Text from '@atoms/Text/Text';
import { View } from 'react-native';

export const TextInputContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const EmailInputContainer = styled(View)`
`;

export const TextInputView = styled(View)`
  flex: 0.45;
`;

export const TextInput = styled(Field)`
  margin-top: 25px;
`;

export const TermsAndCondition = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const AndText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`;

export const PrivacyPolicy = styled(Text)`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const CheckboxView = styled(View)`
  flex: 0.1;
`;

export const TermsView = styled(View)`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
