import { styled } from '@utils/styled'
import Text from '@atoms/Text/Text'
import { View } from 'react-native'

export const HeaderWithTextContainer = styled(View)`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding-bottom:15px;
`

export const TextInHeader = styled(Text)`
  font-size: 18px;
  color:${({theme}) =>theme.colors.white};
  margin:auto;
`
