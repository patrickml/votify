import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Image,
  StyleSheet,
  NativeModules,
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var SpotifyModule = NativeModules.SpotifyAuth;

import Meteor from 'react-native-meteor';
Meteor.connect('ws://localhost:3000/websocket');

export default class App extends Component {
  render() {
    Meteor.call('testMethod')
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        SpotifyModule.setClientID('9fc2c2b9481d449cbbdf3718ebbd0a75','votify-login://callback', ['streaming'], (error)=> {
       if(error){
         console.log(error);
       } else {
         Alert.alert(
            'Success',
            "You are logged in.  Let's play some tunes.")
       }
     })
      }}>
      <View>
        <Text style={styles.welcome}>
          Welcome to Votify!
        </Text>
        <Image resizeMode ={'contain'}
        style={{width: 200}}
         source={require('../assets/login-button-mobile.png')}
        />
        </View>
        </TouchableHighlight>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
