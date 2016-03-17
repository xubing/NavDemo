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
        onPress= {this.props.onPress}>
        <Text style={styles.buttonText}> {this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}




export default  class App extends Component {

  onForward()
  {
     console.log('index')
     console.log(this.props)
     var nextIndex = this.props.index + 1;
     console.log('nextIndex',nextIndex)

     this.props.navigator.push({
       id:  nextIndex,
       index: nextIndex       
     });

 };

 onBack = () => {
   var nextIndex = this.props.index + 1;
   if (nextIndex > 0) {
     this.props.navigator.pop();
   }
 };

   render() {
    console.log('this.props',this.props)
    return(
         <View style={styles.container}>
           <NavButton 
           text = {`To page: ${this.props.index+1}`}
           onPress = {this.onForward.bind(this)}
            >
           </NavButton>

          <Text style={styles.welcome}>
            {this.props.index}
            </Text> 
          <NavButton 
           text = {'Back'}
           onPress = {this.onBack}
            />

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