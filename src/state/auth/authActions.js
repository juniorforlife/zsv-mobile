import {LOGIN} from '../action-types';
import authApis from '../apiCalls/authApi';

export const login = (data) => {
  return (dispatch) => {
    authApis.login(data).then((response) => {
      console.log('fdsfsd');
      dispatch({type: LOGIN, payload: response.data});
    });
  };
};

export default {
  login,
};
