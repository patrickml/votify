import { NativeModules } from 'react-native';
import { setLoggedIn } from '../actions/login.actions';

const { SpotifyAuth } = NativeModules;

/**
 * What to do on login
 * @method login
 * @param  {Object} error  the error object
 */
const login = (error) => {
  if (error) {
    console.log(error);
  } else {
    setLoggedIn();
  }
};

/**
 * Logs a user in with spotify
 * @method login
 */
export default () => {
  const token = '8423453c4a214eb4877037f259a64255';
  SpotifyAuth.setClientID(token, 'votify-login://callback', ['streaming'], login);
};
