import React, { PropTypes } from 'react';

const getArtists = (artists) => artists.map((artist) => artist.name).join(' & ');

const Track = ({ track: { album, name, artists } }) => (
  <div className="track">
    <img src={album.images[0].url} className="album" />
    <ul className="details">
      <li className="name">{name}</li>
      <li className="artist">by {getArtists(artists)}</li>
    </ul>
  </div>
);

export default Track;
