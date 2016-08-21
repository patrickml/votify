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
  const token = '9fc2c2b9481d449cbbdf3718ebbd0a75';
  SpotifyAuth.setClientID(token, 'votify-login://callback', ['streaming'], login);
};
