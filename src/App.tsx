import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './state/store';
import Routes from './view/Routes';

const App = () => {
  useEffect(() => { });

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
