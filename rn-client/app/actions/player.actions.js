import EventHorizon from 'react-native-event-horizon';
import defaultStore from '../stores/player.store';

EventHorizon.createAction('player', 'SET_PLAYING_SONG', (store, uri, update) => {
  update({
    playing: true,
    uri,
  });
});

EventHorizon.createAction('player', 'SET_PLAYING_STATUS', (store, playing, update) => {
  update({
    playing,
  });
});

EventHorizon.createAction('player', 'STOP_PLAYING', (store, data, update) => {
  update(defaultStore);
});

export const setPlaying = (uri) => EventHorizon.dispatch('SET_PLAYING_SONG', uri);
export const setPlayingStatus = (status) => EventHorizon.dispatch('SET_PLAYING_STATUS', status);
export const stopPlaying = () => EventHorizon.dispatch('STOP_PLAYING');
