import { styled } from '@utils/styled';
import Text from '@atoms/Text/Text';
import { View, Image } from 'react-native';

export const Container = styled(View)`
  padding: 16px;
`;

export const TitleText = styled(Text)`
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  text-align: center;
  margin-top: 56px;
  margin-bottom: 32px;
`;

export const Description = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;

export const Email = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 400;
`;

export const MailImage = styled(Image)`
  align-self: center;
  margin-top: 25px;
  margin-bottom: 50px;
`;
