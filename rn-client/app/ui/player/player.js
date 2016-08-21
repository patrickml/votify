import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  NativeModules,
} from 'react-native';
import Meteor from 'react-native-meteor';
import getArtists from '../../util/get-artists';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  cover: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    fontWeight: '500',
  },
  artists: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
    fontWeight: '100',
  },
});

const { SpotifyAuth } = NativeModules;

class Player extends Component {

  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.duration = 100000;
    this.range = 3;
  }

  componentDidMount() {
    this.playSong();
  }

  shouldComponentUpdate({ track }) {
    return (this.props.track && this.props.track.uri) !== (track && track.uri);
  }

  componentDidUpdate() {
    this.playSong();
  }

  setDuration() {
    this.duration = 100000;
    SpotifyAuth.currentTrackDuration((res) => {
      this.duration = res;
    });
  }

  startPlayBackPositionTimer() {
    const { track } = this.props;
    this.setDuration();
    this.interval = setInterval(() => {
      SpotifyAuth.currentPlaybackPosition((position) => {
        console.log(position, this.duration);
        if (position + this.range > this.duration) {
          Meteor.collection('tracks').remove(track._id);
          clearInterval(this.interval);
        }
      });
    }, 1000);
  }

  playSong() {
    const { track } = this.props;
    if (track) {
      console.log(`Playing ${track.uri}`);
      Meteor.collection('tracks').update(track._id, {
        $set: {
          playing: true,
        },
      });
      // we need to wait to play the song, sometime the app freezes if we don't wait
      setTimeout(() => {
        SpotifyAuth.playURI(track.uri, (error) => {
          console.log(error);
          this.startPlayBackPositionTimer();
        });
      }, this.range * 1000);
    }
  }

  render() {
    const { track } = this.props;
    if (!track) {
      return <View />;
    }
    return (
      <View style={styles.container}>
        <Image source={{ uri: track.album.images[0].url }} style={styles.cover} />
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.artists}>{getArtists(track.artists)}</Text>
      </View>
    );
  }
}

Player.propTypes = {
  track: PropTypes.object,
};

export default Player;
