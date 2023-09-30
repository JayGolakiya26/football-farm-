import { styled } from '@utils/styled';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';

const height = Dimensions.get('window').height;
export const BackgroundImage = styled(ImageBackground)`
  position: absolute;
  top: -10px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
`;

export const Container = styled(View)`
  margin-top: ${Platform.select({
    ios: height / 2 + 100,
    default: height / 2 + 160,
  })}px;
`;

export const Label = styled(Text)`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-horizontal: 20px;
`;

export const Description = styled(Text)`
  font-size: 13px;
  color: #aeaeb2;
  font-weight: 400;
  text-align: center;
`;

export const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 20px;
  padding-bottom: 20px;
`;

export const SliderContainer = styled(View)``;

