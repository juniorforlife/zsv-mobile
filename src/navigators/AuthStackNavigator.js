import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthLoadingScreen, LoginScreen, SignUpScreen} from '../view';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="AuthLoading" component={AuthLoadingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
