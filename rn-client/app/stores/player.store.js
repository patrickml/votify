import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  canPlay: false,
  playing: false,
  currentUri: '',
};

EventHorizon.createStore('player', defaultStore);

export default defaultStore;
