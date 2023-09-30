import React from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppNavigation } from '@navigation/hooks';
import Constants from 'expo-constants';
import { Text } from 'react-native-paper';
import Button from '@atoms/GradientButton/GradientButton';
import { Flexed } from '@atoms/common/common.styles';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';

const HomeScreen = () => {
  const { navigate } = useAppNavigation();
  const { t } = useTranslation();
  return (
    <ScreenTemplate>
      <Text>
        {t('home')} dude. {Platform.OS} {Constants?.expoConfig?.extra?.apiUrl}
      </Text>
      <Button mode="contained" onPress={() => navigate("Settings")}>
        Go to Settings
      </Button>

      <Flexed>
        <Button mode="text">Text label</Button>
        <Button disabled>Disable Label</Button>
      </Flexed>
    </ScreenTemplate>
  );
};

export default HomeScreen;
