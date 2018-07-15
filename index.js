import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './configureStore';
import App from './components/App';

const store = configureStore();

const Root = () =>  (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
