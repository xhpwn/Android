// Importing libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import LoginPage from './src/components/LoginPage';
import Registration from './src/components/Registration';
import Landing from './src/components/Landing';
import PasswordReset from './src/components/PasswordReset';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginPage },
  Registration: { screen: Registration },
  Landing: { screen: Landing },
  Reset: { screen: PasswordReset }
});

// Rendering
AppRegistry.registerComponent('Datonate', () => App);
