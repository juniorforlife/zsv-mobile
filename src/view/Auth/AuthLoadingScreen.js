import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLoadingScreen({navigation}) {
  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        console.log(token);
        if (token === null) {
          navigation.navigate('Login');
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };
    checkAuth();
  }, []);
  return null;
}
