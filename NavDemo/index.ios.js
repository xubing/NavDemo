/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app';

class NavDemo extends Component {
  render() {
    return (
      <App number = {1}></App>
    );
  }
}

AppRegistry.registerComponent('NavDemo', () => NavDemo);
