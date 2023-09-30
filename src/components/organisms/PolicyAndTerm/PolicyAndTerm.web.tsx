import React from 'react';
import { LogoContainer, LogoStyle, PrivacyPolicyLastUpdatedText, PrivacyPolicyScreen, PrivacyPolicyScrollView, TermAndPolicyHeaderText, styles } from './PolicyAndTerm.styles';
import { View , FlatList } from 'react-native';
import CloseIcon from '@atoms/Illustration/Close';
import TextBlock from '@molecules/TextBlock/TextBlock';

interface PolicyAndTermProps {
  headerText: string;
  paragraph: any;
  lastUpdateAt: string;
}

const PolicyAndTermWeb:React.FC<PolicyAndTermProps> = ({headerText, paragraph, lastUpdateAt}) => {
  return (
    <PrivacyPolicyScreen>
      <View style={styles.closeIcon}>
        <CloseIcon />
      </View>
      <PrivacyPolicyScrollView>
        <View style={styles.PolicyAndTermContainer}>
          <View style={styles.PrivacyPolicyLogoContainer}>
            <TermAndPolicyHeaderText variant='Inter_700Bold'>{headerText}</TermAndPolicyHeaderText>
            <LogoContainer>
              <LogoStyle />
            </LogoContainer>
            <PrivacyPolicyLastUpdatedText>{lastUpdateAt}</PrivacyPolicyLastUpdatedText>
          </View>
          <View style={styles.PrivacyPolicyTextContainer}>
          <FlatList
                data={paragraph}
                renderItem={({item, index}) => <TextBlock headerText={headerText} subText={`${item.policyText1}${item.policyText2}`} paddingTop={index === 0 ? '0' : '32'} fontHeaderSize={index === 0 ? '24' : '18'} />}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
          </View>
        </View>
      </PrivacyPolicyScrollView>
    </PrivacyPolicyScreen>
  )
}

export default PolicyAndTermWeb
