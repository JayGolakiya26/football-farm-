import { styled } from '@utils/styled';
import {
  View,
} from 'react-native';
export const Container = styled(View)`
flex: 1;
display: flex;
flex-direction: row;
`;

export const SliderContainer = styled(View)`
flex: 1;
`;

export const ImageContainer = styled(View)`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const CloseIconContainer = styled(View)`
  align-items: flex-end;
  justify-content: flex-end;
  padding: 32px;
`;

export const FormContainer = styled(View)<{ isBackground: boolean }>`
background-color: ${({ isBackground,theme }) => isBackground && theme.colors.webMainBackground};
flex: 3;
`;

export const BackGroundView = styled(View)`
  position: absolute;
  top: 0;
`;