import EventHorizon from 'meteor/patrickml:event-horizon';

// define our default store
const defaultStore = {
  search: '',
  tracks: [],
};

// create the store;
EventHorizon.createStore('search', defaultStore);

export default defaultStore;
