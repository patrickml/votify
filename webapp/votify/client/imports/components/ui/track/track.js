import React, { PropTypes } from 'react';

/**
 * Creates a list of artists from the array given from spotify
 * @method getArtists
 * @param  {Array}   artists the artists for the traack
 * @return {String}  the artists
 */
const getArtists = (artists) => artists.map((artist) => artist.name).join(' & ');

const Track = ({ track: { album, name, artists } }) => (
  <div className="track">
    <img src={album.images[0].url} className="album" alt="album cover" />
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
