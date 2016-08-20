import EventHorizon from 'meteor/patrickml:event-horizon';

// define our default store
const defaultStore = {
  src: null,
  playing: false,
};

// create the store;
EventHorizon.createStore('player', defaultStore);

export default defaultStore;
