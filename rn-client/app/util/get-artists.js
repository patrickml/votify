/**
 * Creates a list of artists from the array given from spotify
 * @method getArtists
 * @param  {Array}   artists the artists for the traack
 * @return {String}  the artists
 */
export default (artists) => artists.map((artist) => artist.name).join(' & ');
