import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { composeWithTracker } from 'react-komposer';
import Meteor from 'react-native-meteor';
import EventHorizon from 'react-native-event-horizon';
import LoginPage from './pages/login.page';
import List from './ui/list/list';
import './stores/index';
import './actions/index';

Meteor.connect('ws://votify-demo.herokuapp.com/websocket');

const App = ({ loggedIn }) => (
  <View style={{ flex: 1 }}>
    {
      !loggedIn && <LoginPage /> || <List />
    }
  </View>
);

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default composeWithTracker((props, onData) => {
  onData(null, EventHorizon.subscribe('login'));
}, View, View)(App);
