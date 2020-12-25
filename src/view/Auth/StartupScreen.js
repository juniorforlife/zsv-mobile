import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {authActions} from '../../state';

function StartupScreen({authenticate, setDidCheckAuth}) {
  React.useEffect(() => {
    (async () => {
      try {
        const userJSON = await AsyncStorage.getItem('user');
        if (userJSON === null) {
          setDidCheckAuth();
        } else {
          const userInfo = JSON.parse(userJSON);
          const {token, userId, expiryDate} = userInfo;
          console.log(new Date(expiryDate));
          if (expiryDate <= new Date().getTime() || !token || !userId) {
            await AsyncStorage.removeItem('user');
            setDidCheckAuth();
          } else {
            authenticate(userId, token);
          }
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return null;
}

export default connect(null, {
  authenticate: authActions.authenticate,
  setDidCheckAuth: authActions.setDidCheckAuth,
})(StartupScreen);
