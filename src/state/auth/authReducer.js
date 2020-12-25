import {AUTHENTICATE, DID_CHECK_AUTH, LOGOUT} from '../actionTypes';

const initState = {
  userId: null,
  token: null,
  didCheckAuth: false,
};
export default (state = initState, action) => {
  const {payload} = action;
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        userId: payload.userId,
        token: payload.token,
        didCheckAuth: true,
      };
    }
    case DID_CHECK_AUTH: {
      return {...state, didCheckAuth: true};
    }
    case LOGOUT: {
      return {
        userId: null,
        token: null,
        didCheckAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};
