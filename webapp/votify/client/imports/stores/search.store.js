import EventHorizon from 'meteor/patrickml:event-horizon';

// define our default store
const defaultStore = {
  search: '',
  tracks: [],
  albumID: null,
};

// create the store;
EventHorizon.createStore('search', defaultStore);

export default defaultStore;
