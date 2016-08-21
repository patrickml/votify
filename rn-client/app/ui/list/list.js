import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Meteor, { composeWithTracker } from 'react-native-meteor';
import Item from './item';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});

const List = ({ tracks }) => (
  <Image source={{ uri: tracks && tracks[0] && tracks[0].album.images[0].url }} style={styles.backgroundImage}>
    <ScrollView>
      {
        tracks.map((track, key) => (
          <Item {...track} key={key} />
        ))
      }
    </ScrollView>
  </Image>
);

export default composeWithTracker((props, onData) => {
  Meteor.subscribe('queue');
  const tracks = Meteor.collection('tracks').find({}, {
    sort: {
      playing: -1,
      votesCount: -1,
      createdAt: -1,
    },
  });

  console.log(tracks);
  onData(null, {
    tracks,
  });
}, View, View)(List);
