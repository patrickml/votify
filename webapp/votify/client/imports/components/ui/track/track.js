import React, { PropTypes } from 'react';
import Cover from './cover';

/**
 * Creates a list of artists from the array given from spotify
 * @method getArtists
 * @param  {Array}   artists the artists for the traack
 * @return {String}  the artists
 */
const getArtists = (artists) => artists.map((artist) => artist.name).join(' & ');

const Track = ({ track: { album, name, artists, preview_url } }) => (
  <div className="track">
    <Cover url={album.images[0].url} previewUrl={preview_url} />
    <ul className="details">
      <li className="name">{name}</li>
      <li className="artist">by {getArtists(artists)}</li>
    </ul>
  </div>
);

Track.propTypes = {
  track: PropTypes.object,
};

export default Track;
