import LogoIcon from '@atoms/Illustration/Logo';
import { styled } from '@utils/styled';
import { View, Platform ,ScrollView } from 'react-native';
import Text from '@atoms/Text/Text';
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  closeIcon: {
    marginLeft: 'auto',
    paddingRight: '20px',
    marginTop: '32px'
  },
  PolicyAndTermContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: `32px`,
  },
  PrivacyPolicyLogoContainer:{
    flex:0.4,
    flexDirection:'column',
    gap:'15px'
  },
  PrivacyPolicyTextContainer: {
    flex:0.6
  },
  '@media (min-width: 300) and (max-width: 900)': {
    PolicyAndTermContainer: {
      flexDirection: 'column',
    },
    PrivacyPolicyLogoContainer:{
      flex:'1 1 0'
    },
    PrivacyPolicyTextContainer:{
      paddingTop:'30px',
      flex:'1 1 0',
    }
  }
})

export const LogoContainer = styled(View)`
  background-color:#FFFFFF2E;
  width: 100px;
  height: 100px;
  border-radius:70px;
  margin:auto;
  margin-bottom:16px;
  margin-top:${Platform.select({web: 22, default: 15})}px;
`

export const LogoStyle = styled(LogoIcon)`
  margin:auto;
`
export const PrivacyPolicyLastUpdatedText = styled(Text)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.darkText};
  text-align:center;
  padding-top:${Platform.select({web: 5, default: 0})}px
`

export const PrivacyPolicyScreen = styled(View)`
  background-color:${({theme}) => theme.colors.darkBackground};
  height:100vh
`
export const PolicyAndTermContainer = styled(View)`
  display:flex;
  flex-direction:'row',
  padding:${Platform.select({web: 32, default: 16})}px;
  flex:1
`

export const PrivacyPolicyLogoContainer = styled(View)`
  flex:0.3;
  flex-direction:column;
`

export const PrivacyPolicyTextContainer = styled(View)`
  flex:0.7;
  flex-direction:column;
`

export const PrivacyPolicyScrollView = styled(ScrollView)`
  margin-right:${Platform.select({web: 32, default: 0})}px;
`

export const TermAndPolicyHeaderText = styled(Text)`
  font-size:32px;
  color:${({theme}) => theme.colors.white};
  text-align:center;
`