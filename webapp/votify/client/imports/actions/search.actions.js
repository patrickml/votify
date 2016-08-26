import EventHorizon from 'meteor/patrickml:event-horizon';
import defaultStore from '../stores/search.store';

// sets the search
EventHorizon.createAction('search', 'SET_SEARCH', (store, search, update) => {
  update({
    search,
  });
});

// sets the track items
EventHorizon.createAction('search', 'SET_SEARCH_ITEMS', (store, tracks, update) => {
  update({
    tracks,
  });
});

// resets the store
EventHorizon.createAction('search', 'RESET_SEARCH', (store, tracks, update) => {
  update(defaultStore);
});

// Opens/closes album-view modal
EventHorizon.createAction('search', 'SET_ALBUM', (store, albumID, update) => {
  console.log(albumID);
  update({
    albumID,
  });
});

export const setSearch = (search) => EventHorizon.dispatch('SET_SEARCH', search);
export const setTracks = (tracks) => EventHorizon.dispatch('SET_SEARCH_ITEMS', tracks);
export const resetSearch = () => EventHorizon.dispatch('RESET_SEARCH');
export const setAlbumID = (albumID) => EventHorizon.dispatch('SET_ALBUM', albumID);
