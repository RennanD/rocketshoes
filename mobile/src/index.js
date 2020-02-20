import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';

import store from './store';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
