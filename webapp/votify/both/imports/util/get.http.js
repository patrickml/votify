import { HTTP } from 'meteor/http';

/**
 * Async get http request
 * @param   {String} url    the url to call
 * @param   {Object} params the params to use for the call
 * @return  {Promise}
 */
export default (url, params) => (
  new Promise((resolve, reject) => {
    HTTP.get(url, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })
);
