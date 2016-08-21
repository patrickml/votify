import EventHorizon from 'meteor/patrickml:event-horizon';
import defaultStore from '../stores/player.store';

// sets the track to play and plays
EventHorizon.createAction('player', 'PLAY_TRACK', (store, src, update) => {
  update({
    src,
    playing: true,
  });
});

// stop playing
EventHorizon.createAction('player', 'STOP_PLAYING', (store, tracks, update) => {
  update(defaultStore);
});

export const playTrack = (src) => EventHorizon.dispatch('PLAY_TRACK', src);
export const stopPlaying = () => EventHorizon.dispatch('STOP_PLAYING');
