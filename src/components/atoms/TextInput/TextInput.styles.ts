import { styled } from '@utils/styled';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const RNPTextInput = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const styles = StyleSheet.create({
  border: {
    borderRadius: 4,
  },
  label: {
    margin: 5,
    color: '#fff',
  },
});
