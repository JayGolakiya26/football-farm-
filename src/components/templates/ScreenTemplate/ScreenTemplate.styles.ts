import {isDesktopWeb} from '@constants/platform';
import { styled } from '@utils/styled';
import { ImageBackground,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeAreaContainer = styled(SafeAreaView)<{isBackground:boolean}>`
  flex: 1;
  background-color: ${({ isBackground,theme }) =>isBackground &&  theme.colors.bgColor};
`;

export const BackgroundImage = styled(ImageBackground)`
  height: 100%;
  width: 100%;
`;

export const Container = styled(View)`
  flex: 1;
  max-width: 480px;
  align-self:  ${()=>isDesktopWeb?'center':"auto"};;

`;