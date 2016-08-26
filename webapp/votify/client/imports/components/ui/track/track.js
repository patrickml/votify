import React, { PropTypes } from 'react';
import Cover from './cover';
import searchSpotify from '../../../spotify/search.api';
import { setTracks, setSearch, setAlbumID } from '../../../actions/search.actions';

// debounce the search so we don't over load the spotify servers
const debounced = _.debounce((value) => {
  searchSpotify(value).then((res) => setTracks(res.items));
}, 300);

/**
 * Creates a list of artists from the array given from spotify
 * @method getArtists
 * @param  {Array}   artists the artists for the traack
 * @return {String}  the artists
 */
const getArtists = (artists) => artists.map((artist, i) => (
  <span
    key={artist.name}
  >
    <span
      className="artistText"
      onClick={() => {
        setSearch(artist.name);
        debounced(artist.name);
      }}
    >
    {artist.name}</span> {artists.length - 1 === i ? '' : ' & '}</span>
  ));

const Track = ({ track, track: { album, name, artists, preview_url } }) => (
  <div className="track">
    <Cover url={album.images[0].url} previewUrl={preview_url} />
    <ul className="details" onClick={() => setAlbumID(track.album.id)}>
      <li className="name">{name}</li>
      <li className="artist">by {getArtists(artists)}</li>
    </ul>
  </div>
);

Track.propTypes = {
  track: PropTypes.object,
};

export default Track;
