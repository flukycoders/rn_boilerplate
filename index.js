/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import database from './src/db';

const MainApp = () => (
  <DatabaseProvider database={database}>
    <App />
  </DatabaseProvider>
);
AppRegistry.registerComponent(appName, () => MainApp);
