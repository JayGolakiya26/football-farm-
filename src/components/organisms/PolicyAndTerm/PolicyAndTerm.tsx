import React from 'react';
import TextBlock from '@molecules/TextBlock/TextBlock';
import { LogoContainer, LogoStyle, PolicyAndTermContainer, PrivacyPolicyLastUpdatedText, PrivacyPolicyLogoContainer, PrivacyPolicyScrollView, PrivacyPolicyTextContainer } from './PolicyAndTerm.styles';
import { FlatList } from 'react-native';
import TitleWithButton from '@molecules/TitleWithButton/TitleWithButton';
import ArrowLeft from '@atoms/Illustration/ArrowLeft';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';

interface PolicyAndTermProps {
  headerText: string;
  paragraph: any;
  lastUpdateAt: string;
}

const PolicyAndTerm: React.FC<PolicyAndTermProps> = ({headerText, paragraph, lastUpdateAt}) => {
  return (
    <ScreenTemplate>
      <SafeAreaView>
        <PrivacyPolicyScrollView>
          <PolicyAndTermContainer>
            <PrivacyPolicyLogoContainer>
              <TitleWithButton image={ArrowLeft} text='Privacy Policy' />
              <LogoContainer>
                <LogoStyle />
              </LogoContainer>
              <PrivacyPolicyLastUpdatedText>{lastUpdateAt}</PrivacyPolicyLastUpdatedText>
            </PrivacyPolicyLogoContainer>
            <PrivacyPolicyTextContainer>
              <FlatList
                data={paragraph}
                renderItem={({item,index }) => <TextBlock headerText={headerText} subText={`${item.policyText1}${item.policyText2}`} paddingTop={'32'} fontHeaderSize={index === 0 ? '24' : '18'} />}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </PrivacyPolicyTextContainer>
          </PolicyAndTermContainer>
        </PrivacyPolicyScrollView>
      </SafeAreaView>
    </ScreenTemplate>
  )
}

export default PolicyAndTerm