import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {HomeScreen, homeScreenOptions} from './Home';
import {ProfileScreen} from './Profile';
import {LoginScreen, StartupScreen, SignUpScreen} from './Auth';
import {SettingsScreen} from './Settings';
import {VectorIcon} from './_shared';

import {navRef} from '../services/navService';

const MainStack = createStackNavigator();
const mainStackOptions = {
  headerStyle: {
    backgroundColor: 'rgb(255, 45, 85)',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerBackTitleStyle: {},
  headerTintColor: '#fff',
  headerRight: () => (
    <VectorIcon name="shopping-cart" size={20} style={{marginRight: 32}} />
  ),
};
const MainStackNavigator = () => (
  <MainStack.Navigator screenOptions={mainStackOptions}>
    <MainStack.Screen name="Settings" component={SettingsScreen} />
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={homeScreenOptions}
    />
    <MainStack.Screen name="Profile" component={ProfileScreen} />
  </MainStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default (props) => {
  const {token, didCheckAuth} = useSelector((state) => state.auth);
  const isAuth = !!token;
  return (
    <NavigationContainer ref={navRef}>
      {isAuth && <MainStackNavigator />}
      {!isAuth && !didCheckAuth && <StartupScreen />}
      {!isAuth && didCheckAuth && <AuthStackNavigator />}
    </NavigationContainer>
  );
};
