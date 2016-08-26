import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  NativeModules,
} from 'react-native';
import Meteor from 'react-native-meteor';
import Actions from './actions';
import { setPlaying } from '../../actions/player.actions';
import getArtists from '../../util/get-artists';
import { fade } from '../../util/player';

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
    this.state = {
      initialized: false,
    };
    this.playSong = this.playSong.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.duration = 100000;
  }

  componentDidMount() {
    this.initializedInterval = setInterval(() => {
      SpotifyAuth.initialized((res) => {
        if (res) {
          // let the component know the api is initialized
          this.setState({
            initialized: true,
          });
          // clear the interval
          clearInterval(this.initializedInterval);
        }
      });
    }, 500);
    // onmount start the playlist
    this.playSong();
  }

  shouldComponentUpdate({ track }, { initialized }) {
    // only update the component if the track has changed
    return (
      (this.props.track && this.props.track.uri) !== (track && track.uri) ||
      this.state.initialized !== initialized
    );
  }

  componentDidUpdate() {
    // if the component updates play the next song
    this.playSong();
  }

  /**
   * Set the duration of the current song
   */
  setDuration() {
    this.duration = 100000;
    SpotifyAuth.currentTrackDuration((res) => {
      this.duration = res;
    });
  }

  /**
   * Starts the timer that checks if the song has finished
   */
  startPlayBackPositionTimer() {
    const { track } = this.props;
    this.setDuration();
    this.interval = setInterval(() => {
      SpotifyAuth.currentPlaybackPosition((position) => {
        if (this.duration - position <= 3) {
          fade();
        }
        if (Math.round(position) + 2 > this.duration) {
          Meteor.collection('tracks').remove(track._id);
          clearInterval(this.interval);
        }
      });
    }, 500);
  }

  /**
   * Plays the next song in queue
   */
  playSong() {
    const { track } = this.props;
    if (track) {
      // update the song to show as playing so the list will not
      // reorder and move this item
      Meteor.collection('tracks').update(track._id, {
        $set: {
          playing: true,
        },
      });
      if (this.state.initialized) {
        fade(true);
        SpotifyAuth.playURI(track.uri, () => {
          setPlaying(track.uri);
          this.startPlayBackPositionTimer();
        });
      }
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
        <Actions />
      </View>
    );
  }
}

Player.propTypes = {
  track: PropTypes.object,
};

export default Player;
