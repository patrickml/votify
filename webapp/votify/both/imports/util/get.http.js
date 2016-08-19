import { HTTP } from 'meteor/http';

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
