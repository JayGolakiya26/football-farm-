import { styled } from '@utils/styled';
import Button from '@atoms/Button/Button';
import { View } from 'react-native';
import { StyleSheet, Platform } from 'react-native';

export const SocialButtonContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 4px;
`;

export const SocialButton = styled(Button)`
  flex: ${Platform.select({ android: 0.25, ios: 0.2 })};
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;

export const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
});
