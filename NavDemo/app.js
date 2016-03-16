'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,  
  TouchableHighlight,

} from 'react-native';

 class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default  class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <NavButton text ={`clickme ${this.props.number+1}`} 
        onPress={() => {
            this.props.navigator.push({
              message: 'Swipe right to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
          }}
        />
        
        <Text style={styles.welcome}>
          {this.props.number}
        </Text>       
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
   buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});