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
  View,
  Navigator
} from 'react-native';

import App from './app';

//想实现点击App组件中的按钮，跳到新的App组件中。熟悉下Navigator的用法。

export default class DemoApp extends Component {
  
  renderScene(route, navigator) {
    console.log('route.id',route.id) 
    return (
       <App name= {'App'} index ={route.id} navigator= {navigator} />
      );  
  }
  
  configureScene(route)
  {
    console.log('route',route)
    if (route.sceneConfig) {
       return route.sceneConfig;
     }              
    return Navigator.SceneConfigs.FadeToTheRight;
  }

  render() {
    return (
      <Navigator
      initialRoute={{ index: 1,id:1}}
      configureScene={this.configureScene}              
      renderScene= {this.renderScene} >
      </Navigator>
    );
  }
}

