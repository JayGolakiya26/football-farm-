import React from 'react';
import Introduction from '@screens/Introduction/IntroScreen';
import NonAuthTemplate from '@templates/NonAuthTemplate/NonAuthTemplate';
import SignupScreen from '@screens/SignupScreen/SignupScreen';

const RegistrationScreen: React.FC = () => {
  return (
    <NonAuthTemplate
      leftChildren={<Introduction />}
      RightChildren={<SignupScreen />}
    />
  );
};
export default RegistrationScreen;
