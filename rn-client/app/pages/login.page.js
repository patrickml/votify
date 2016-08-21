import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import loginButton from '../../assets/login-button-mobile.png';
import login from '../util/login';

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

export default () => (
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
