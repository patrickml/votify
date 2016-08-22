import React, { Component, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import Meteor, { composeWithTracker } from 'react-native-meteor';
import { BlurView } from 'react-native-blur';
import Loading from '../ui/loading/page.loading';
import List from '../ui/list/list';
import Player from '../ui/player/player';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    backgroundColor: 'transparent',
  },
  pageContainer: {
    flex: 1,
  },
});

class Page extends Component {

  /**
   * Get the background image for the page
   */
  getBackgroundImage(tracks) {
    const defaultBackground = 'https://static.pexels.com/photos/6966/abstract-music-rock-bw.jpg';
    return tracks && tracks[0] && tracks[0].album.images[0].url || defaultBackground;
  }

  render() {
    const { tracks } = this.props;
    return (
      <Image source={{ uri: this.getBackgroundImage(tracks) }} style={styles.backgroundImage}>
        <BlurView
          blurType="dark"
          style={styles.pageContainer}
        >
          <Player track={tracks[0]} />
          <List tracks={tracks.splice(1, tracks.length)} />
        </BlurView>
      </Image>
    );
  }
}

Page.propTypes = {
  tracks: PropTypes.array,
};

export default composeWithTracker((props, onData) => {
  const sub = Meteor.subscribe('queue');
  const tracks = Meteor.collection('tracks').find({}, {
    sort: {
      playing: -1,
      votesCount: -1,
      createdAt: 1,
    },
  });

  const ready = sub.ready();

  if (ready) {
    onData(null, {
      ready,
      tracks,
    });
  }
}, Loading, Loading)(Page);
