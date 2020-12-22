import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {navigationRef} from '../services/navigationService';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';

export default (props) => {
  const {authToken} = useSelector((state) => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      {authToken ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
