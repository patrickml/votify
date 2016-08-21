import React, { Component } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  NativeModules,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Meteor from 'react-native-meteor';
import loginButton from '../assets/login-button-mobile.png';

Meteor.connect('ws://votify-demo.herokuapp.com/websocket');

const { SpotifyAuth } = NativeModules;

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

/**
 * Logs a user in with spotify
 * @method login
 */
const login = () => {
  SpotifyAuth.setClientID('9fc2c2b9481d449cbbdf3718ebbd0a75', 'votify-login://callback', ['streaming'], (error) => {
    if (error) {
      console.log(error);
    } else {
      Alert.alert('Success', 'You are logged in.  Let\'s play some tunes.');
    }
  });
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={login}>
          <View>
            <Text style={styles.welcome}>
              Welcome to Votify!
            </Text>
            <Image
              resizeMode="contain"
              style={{ width: 200 }}
              source={loginButton}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
