import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import Meteor, { composeWithTracker } from 'react-native-meteor';
import EventHorizon from 'react-native-event-horizon';
import LoginPage from './pages/login.page';
import QueuePage from './pages/queue.page';
import './stores/index';
import './actions/index';

Meteor.connect('ws://votify-demo.herokuapp.com/websocket');

const App = ({ loggedIn }) => (
  <View style={{ flex: 1 }}>
    {
      !loggedIn && <LoginPage /> || <QueuePage />
    }
  </View>
);

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default composeWithTracker((props, onData) => {
  console.log('APP Initializing..');
  onData(null, EventHorizon.subscribe('login'));
}, View, View)(App);
