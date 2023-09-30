import React from 'react';
import { useAppDispatch } from '@redux/store';
import { changeTheme } from '@redux/slices/theme';
import { Card, List } from 'react-native-paper';
import { logout } from '@redux/slices/auth';
import { View } from 'react-native';
import Button from '@atoms/GradientButton/GradientButton';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ height: 16 }} />
      <Card>
        <Card.Content>
          <List.Section>
            <List.Subheader>Change Theme</List.Subheader>
            <List.Item
              title="Dark"
              left={() => <List.Icon icon="folder" />}
              onPress={() => dispatch(changeTheme('dark'))}
            />
            <List.Item
              title="Default"
              onPress={() => dispatch(changeTheme('default'))}
              left={() => <List.Icon icon="folder" />}
            />
          </List.Section>
        </Card.Content>
      </Card>
      <View style={{ height: 16 }} />
      <Button mode="outlined" onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </View>
  );
};

export default SettingsScreen;
