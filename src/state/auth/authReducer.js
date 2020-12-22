import {LOGIN, LOGOUT} from '../action-types';

const initState = {
  userId: null,
  authToken: null,
};
export default (state = initState, action) => {
  const {payload} = action;
  switch (action.type) {
    case LOGIN: {
      return {
        userId: payload.userId,
        authToken: payload.authToken,
      };
    }
    case LOGOUT: {
      return {...initState};
    }
    default: {
      return state;
    }
  }
};
