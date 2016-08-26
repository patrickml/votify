import EventHorizon from 'react-native-event-horizon';
import defaultStore from '../stores/login.store';

EventHorizon.createAction('login', 'SET_LOGGED_IN', (store, data, update) => {
  update({
    loggedIn: true,
  });
  console.log('LOGGED IN');
});

EventHorizon.createAction('login', 'SET_LOGGED_OUT', (store, data, update) => {
  update(defaultStore);
});

export const setLoggedIn = () => EventHorizon.dispatch('SET_LOGGED_IN');
export const logout = () => EventHorizon.dispatch('SET_LOGGED_OUT');
