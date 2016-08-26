import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  loggedIn: false,
};

EventHorizon.createStore('login', defaultStore);

export default defaultStore;
