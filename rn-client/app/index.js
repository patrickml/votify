import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Meteor from 'react-native-meteor';

Meteor.connect('ws://localhost:3000/websocket');

export default class App extends Component {
  render() {
    Meteor.call('testMethod')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Votify!
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
