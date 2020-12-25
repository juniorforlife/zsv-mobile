import React, {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {Button, Text} from '../_shared';
import {authActions} from '../../state';

const SettingsScreen = ({logout}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Text>Settingw</Text>
      <Button onPress={handleLogout} label="Logout" />
    </View>
  );
};

export default connect(null, {logout: authActions.logout})(SettingsScreen);
