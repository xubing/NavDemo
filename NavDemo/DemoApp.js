/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  Navigator
} from 'react-native';

import App from './app';

//想法: 实现点击App组件中的按钮，跳到新的App组件中。熟悉Navigator的用法。

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
      configureScene={this.configureScene.bind(this)}              
      renderScene= {this.renderScene.bind(this)} >
      </Navigator>
    );
  }
}

