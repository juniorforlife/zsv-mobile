import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import store from './state/store';
import AppNavigator from './navigators/AppNavigator';

const App = () => {
  useEffect(() => {});

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
