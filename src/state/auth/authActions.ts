import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';

import { AUTHENTICATE, DID_CHECK_AUTH, LOGOUT } from '../actionTypes';
import authApis from '../api/authApi';

const authenticate = (userId: string, token: string) => {
  return { type: AUTHENTICATE, payload: { userId, token } };
};

const setDidCheckAuth = () => {
  return { type: DID_CHECK_AUTH };
};

const login = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    authApis.login(email, password).then((response: any) => {
      const { token, userId, expiresIn } = response.data;
      dispatch(authenticate(userId, token));
      // expiresIn is in second
      let expiryDate = new Date().getTime() + +expiresIn * 1000;
      AsyncStorage.setItem('user', JSON.stringify({ token, userId, expiryDate }));
    });
  };
};

const logout = () => {
  return (dispatch) => {
    AsyncStorage.removeItem('user').then(() => {
      dispatch({ type: LOGOUT });
    });
  };
};

export default {
  login,
  authenticate,
  setDidCheckAuth,
  logout,
};
