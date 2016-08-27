import {
  NativeModules,
} from 'react-native';
import Meteor from 'react-native-meteor';
import { setPlayingStatus } from '../actions/player.actions';
const { SpotifyAuth } = NativeModules;
import getRandomSong from './fallback';

let fading = false;

/**
 * Fade music either in or out
 */
export const fade = (fadeIn = true, callback = () => {}, callbackFirst = false) => {
  // make sure we are not currently fading
  if (!fading) {
    // check if we need to call the callback first
    if (callbackFirst) {
      callback();
    }
    // set the global fading variable
    fading = true;
    // start our volume depending on fading in or out
    let volume = fadeIn ? 0 : 1;
    const interval = setInterval(() => {
      // increment or decrement our volume
      volume += (0.01 * (fadeIn ? 1 : -1));
      // set the spotify volme
      SpotifyAuth.setVolume(volume, () => {});
      // once finished fading clear the interval and call the callback if needed
      if ((fadeIn && volume >= 1) || (!fadeIn && volume <= 0.01)) {
        SpotifyAuth.setVolume(fadeIn ? 1 : 0, () => {});
        // clear the interval
        clearInterval(interval);
        // set the global fading variable to false
        fading = false;
        // call the callback if we didn't do it at the begining
        if (!callbackFirst) {
          callback();
        }
      }
    }, 10);
  }
};

/**
 * Toggles the current song to play or pause
 * @method togglePlayStatus
 * @param  {Boolean} status the play or not to play
 */
export const togglePlayStatus = (status) => {
  // set the status of the player
  setPlayingStatus(status);
  // fade the music then change the status of the player with spotify
  fade(status, () => {
    // change the spotify player status
    SpotifyAuth.setIsPlaying(status, () => {});
  }, status);
};

/**
 * Remove Top Song from Queue
 * @method removeSong
 */
export const removeSong = (_id) => {
  // find the top song
  const track = Meteor.collection('tracks').findOne({}, {
    sort: {
      playing: -1,
      votesCount: -1,
      createdAt: 1,
    },
  });

  // remove the top song
  Meteor.collection('tracks').remove(_id || track._id);

  // until we have real fallback playlists this will add a random song from the config
  if (Meteor.collection('tracks').find().length < 1) {
    Meteor.collection('tracks').insert(Object.assign({}, getRandomSong(), {
      votes: ['host'],
      votesCount: 1,
      playing: false,
      createdAt: new Date(),
      createdBy: 'host',
    }));
  }
};
