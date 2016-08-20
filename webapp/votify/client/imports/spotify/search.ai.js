import get from '/both/imports/util/get.http';

/**
 * Searchs spotify for tracks
 * @param {String} q  the track to search for
 */
export default (q, offset = 0) => (
  get('https://api.spotify.com/v1/search', {
    params: {
      q,
      offset,
      type: 'track',
    },
  }).then(({ data: { tracks } }) => tracks)
);
