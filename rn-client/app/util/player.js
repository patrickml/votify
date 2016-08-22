import {
  NativeModules,
} from 'react-native';
import Meteor from 'react-native-meteor';
import { setPlayingStatus } from '../actions/player.actions';
const { SpotifyAuth } = NativeModules;

/**
 * Toggles the current song to play or pause
 * @method togglePlayStatus
 * @param  {Boolean} status the play or not to play
 */
export const togglePlayStatus = (status) => {
  SpotifyAuth.setIsPlaying(status, () => {
    setPlayingStatus(status);
  });
};

/**
 * Remove Top Song from Queue
 * @method removeSong
 */
export const removeSong = () => {
  const track = Meteor.collection('tracks').findOne({}, {
    sort: {
      playing: -1,
      votesCount: -1,
      createdAt: 1,
    },
  });
  Meteor.collection('tracks').remove(track._id);
};
