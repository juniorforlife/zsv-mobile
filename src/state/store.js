import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './auth/authReducer';
import tutorsReducer from './tutors/tutorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tutors: tutorsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
