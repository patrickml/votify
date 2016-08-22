import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import EventHorizon from 'react-native-event-horizon';
import { composeWithTracker } from 'react-native-meteor';
import Icon from 'react-native-vector-icons/Ionicons';
import { togglePlayStatus, removeSong } from '../../util/player';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Actions = ({ playing }) => (
  <View style={styles.container}>
    {
      playing && (
        <TouchableOpacity onPress={() => togglePlayStatus(false)}>
          <Icon name="ios-pause" size={30} color="#fff" />
        </TouchableOpacity>
      ) || (
        <TouchableOpacity onPress={() => togglePlayStatus(true)}>
          <Icon name="ios-play" size={30} color="#fff" />
        </TouchableOpacity>
      )
    }
    <TouchableOpacity onPress={() => removeSong()}>
      <Icon name="ios-fastforward" size={30} color="#fff" />
    </TouchableOpacity>
  </View>
);

Actions.propTypes = {
  playing: PropTypes.bool,
};

export default composeWithTracker((props, onData) => {
  onData(null, EventHorizon.subscribe('player'));
}, View, View)(Actions);
