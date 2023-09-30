import React from 'react';
import PolicyAndTerm from '@organisms/PolicyAndTerm/PolicyAndTerm';
import { policyContent } from '@constants/policy';

const PrivacyPolicyScreen = () => {
  return (
    <PolicyAndTerm headerText={policyContent.headerText} paragraph={policyContent.policyText} lastUpdateAt={policyContent.lastUpdateAt} />
  )
}

export default PrivacyPolicyScreen;
