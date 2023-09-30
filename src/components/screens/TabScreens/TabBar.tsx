import React from 'react';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { useAppTheme } from '@constants/theme';
import { Dimensions } from 'react-native';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import MessageScreen from '@screens/Chat/MessageScreen';
import ClubApproach from '@screens/ClubApproach/ClubApproach';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';

export type TabParamList = {
 home: undefined;
 chat: undefined;
 approaches: undefined;
 settings: undefined;
};

const AppTabs = createBottomTabNavigator<TabParamList>();

const TabBarScreen = () => {
  const { colors } = useAppTheme();
  const isMobileView = Dimensions.get('window').width < 756;

  return (
    <AppTabs.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: colors.buttonBG,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          color: 'gray',
        },
        tabBarIconStyle: {
          flex: isMobileView ? 0.7 : 0,
        },
        tabBarItemStyle: {
          justifyContent: isMobileView ? 'flex-start' : 'center',
        },
        headerTitle: () => null,
        headerShown: false,
      }}>
      <AppTabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home'
        }}
        component={HomeScreen}
      />
      <AppTabs.Screen
        name='chat'
        options={{
          tabBarLabel: 'Chat',
        }}
        component={MessageScreen}
      />
      <AppTabs.Screen
        name="approaches"
        options={{
          tabBarLabel: 'Approaches',
        }}
        component={ClubApproach}
      />
      <AppTabs.Screen
        name="settings"
        options={{
          tabBarLabel: 'Settings',
        }}
        component={SettingsScreen}
      />
    </AppTabs.Navigator>
  );
};

export default TabBarScreen;
