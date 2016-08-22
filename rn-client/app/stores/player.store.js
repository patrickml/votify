import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  playing: false,
  uri: '',
};

EventHorizon.createStore('player', defaultStore);

export default defaultStore;
