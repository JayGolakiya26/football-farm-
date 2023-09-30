import { useNavigation } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  CreatePassword: undefined;
  TermCondition: undefined;
  Forgot: undefined;
  Reset: undefined;
  PlayerProfile: undefined;
  Introduction: undefined;
  InstructionSent: undefined;
  Registration: undefined;
  PrivacyPolicy: undefined;
};
export type AppStackParamList = {
  TabBar: undefined;
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
  ChangePassword: undefined;
  Membership: undefined;
  ClubHome: undefined;
  ClubApproach: undefined;
  PlayerApproach: undefined;
  ClubList: undefined;
  PlayerList: undefined;
  Notification: undefined;
  EditProfile: undefined;
  Payment: undefined;
  MyReview: undefined;
  Messages: undefined;
};

export type AppStackNavigationProps = StackNavigationProp<AppStackParamList>;
export const useAppNavigation = () => useNavigation<AppStackNavigationProps>();
export const AppStack = createStackNavigator<AppStackParamList>();

export type AuthStackNavigationProps = StackNavigationProp<AuthStackParamList>;
export const useAuthNavigation = () =>
  useNavigation<AuthStackNavigationProps>();
export const AuthStack = createStackNavigator<AuthStackParamList>();

const config = {
  screens: {
    TabBar: 'tabbar',
    Home: 'home',
    Settings: 'settings',
    Login: 'login',
    Signup: 'signup',
    CreatePassword: 'createpassword',
    TermCondition: 'termcondition,',
    Forgot: 'forgot',
    Reset: 'reset',
    PlayerProfile: 'playerprofile',
    Profile: 'profile',
    Introduction: 'introduction',
    ChangePassword: 'changepassword',
    Membership: 'membership',
    ClubHome: 'clubhome',
    ClubApproach: 'clubapproach',
    PlayerApproach: 'playerapproach',
    ClubList: 'clublist',
    PlayerList: 'playerlist',
    Notification: 'notification',
    EditProfile: 'editprofile',
    Payment: 'payment',
    MyReview: 'myreview',
    InstructionSent: 'instructionsent',
    Registration: 'registration',
    PrivacyPolicy: 'privacypolicy',
  },
};

export const linking = {
  config,
};
