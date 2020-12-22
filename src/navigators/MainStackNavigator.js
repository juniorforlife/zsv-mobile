import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, homeScreenOptions, ProfileScreen} from '../view';
import {VectorIcon} from '../view/components';

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
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={homeScreenOptions}
    />
    <MainStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={(navigation) => ({
        headerTitle: 'Product Detail',
      })}
    />
  </MainStack.Navigator>
);

export default MainStackNavigator;
