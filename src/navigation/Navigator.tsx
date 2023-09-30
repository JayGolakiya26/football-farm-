import  React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import LoginScreen from '@screens/LoginScreen/LoginScreen';
import SignupScreen from '@screens/SignupScreen/SignupScreen';
import CreatePasswordScreen from '@screens/CreatePassword/CreatePasswordScreen';
import TermConditionScreen from '@screens/TermCondition/TermCondition';
import ForgotScreen from '@screens/ForgotPasswordScreen/ForgotPassword';
import ResetScreen from '@screens/ResetScreen/ResetScreen';
import PlayerProfileScreen from '@screens/PlayerProfileScreens/PlayerProfileScreen';
import ProfileScreen from '@screens/MyProfile/ProfileScreen';
import IntroScreen from '@screens/Introduction/IntroScreen';
import ChangePasswordScreen from '@screens/ChangePassword/ChangePassword';
import MembershipScreen from '@screens/Membership/MembershipScreen';
import ClubHome from '@screens/ClubHome/ClubHome';
import PlayerApproachScreen from '@screens/PlayerApproach/PlayerApproach';
import ClubListScreen from '@screens/ClubListing/ClubListScreen';
import PlayerListScreen from '@screens/PlayerListing/PlayerListScreen';
import NotificationList from '@screens/Notifications/NotificationList';
import EditProfileScreen from '@screens/EditProfile/EditProfile';
import PaymentScreen from '@screens/Payment/PaymentScreen';
import MyReviewScreen from '@screens/MyReviews/MyReview';
import TabBarScreen from '@screens/TabScreens/TabBar';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import RegistrationScreen from '@screens/WebScreen/RegistrationScreen/RegistrationScreen';
import {AppStack, AuthStack, linking} from './hooks';
import {useSelector} from '@redux/store';
import {isDesktopWeb} from '@constants/platform';
import PrivacyPolicyScreen from '@screens/PrivacyPolicyScreen/PrivacyPolicyScreen';
import InstructionSent from '@screens/InstructionSent/InstructionSent';

const stackNavigatorConfig = {
  screenOptions: {headerShown: false},
};

interface NavigatorProps {
  theme?: Theme;
}

const Navigator: React.FC<NavigatorProps> = ({theme}) => {
  const token = useSelector((state) => state.auth.token);
  const authNavigator = (
    <AuthStack.Navigator
      {...stackNavigatorConfig}
      initialRouteName={isDesktopWeb ? 'Registration' : 'Introduction'}
    >
      <AuthStack.Screen name="Introduction" component={IntroScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      <AuthStack.Screen
        name="CreatePassword"
        component={CreatePasswordScreen}
      />
      <AuthStack.Screen name="TermCondition" component={TermConditionScreen} />
      <AuthStack.Screen name="Forgot" component={ForgotScreen} />
      <AuthStack.Screen name="InstructionSent" component={InstructionSent} />
      <AuthStack.Screen name="Reset" component={ResetScreen} />
      <AuthStack.Screen name="PlayerProfile" component={PlayerProfileScreen} />
      <AuthStack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </AuthStack.Navigator>
  );
  const appNavigator = (
    <AppStack.Navigator {...stackNavigatorConfig}>
      <AppStack.Screen name="TabBar" component={TabBarScreen} />
      <AppStack.Screen name="Profile" component={ProfileScreen} />
      <AppStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <AppStack.Screen name="Membership" component={MembershipScreen} />
      <AppStack.Screen name="ClubHome" component={ClubHome} />
      <AppStack.Screen name="PlayerApproach" component={PlayerApproachScreen} />
      <AppStack.Screen name="ClubList" component={ClubListScreen} />
      <AppStack.Screen name="PlayerList" component={PlayerListScreen} />
      <AppStack.Screen name="Notification" component={NotificationList} />
      <AppStack.Screen name="EditProfile" component={EditProfileScreen} />
      <AppStack.Screen name="Payment" component={PaymentScreen} />
      <AppStack.Screen name="MyReview" component={MyReviewScreen} />
      <AppStack.Screen name="Settings" component={SettingsScreen} />
    </AppStack.Navigator>
  );

  return (
    <NavigationContainer theme={theme} linking={linking}>
      {token ? appNavigator : authNavigator}
    </NavigationContainer>
  );
};

export default Navigator;
