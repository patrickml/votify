import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import ReactInput from 'lazy-input';
import EventHorizon from 'meteor/patrickml:event-horizon';
import searchSpotify from '../../../spotify/search.api';
import { setTracks, setSearch, resetSearch } from '../../../actions/search.actions';

// debounce the search so we don't over load the spotify servers
const debounced = _.debounce((value) => {
  searchSpotify(value).then((res) => setTracks(res.items));
}, 300);

// call the dounced search onChange
const onChange = (event) => {
  const value = event.target.value;

  if (value.length > 0) {
    // set the search
    setSearch(value);
    // search for tracks
    debounced(value);
  } else {
    resetSearch();
  }
};

const Input = ({ search }) => (
  <div className="search-input-container">
    <ReactInput
      type="text"
      onChange={onChange}
      value={search}
      className="search-input"
      placeholder="Enter track or artist..."
    />
    {
      search && search.length > 0 && (
        <i className="lnr lnr-cross" onClick={resetSearch} />
      )
    }
  </div>
);

Input.propTypes = {
  search: PropTypes.string,
};

export default composeWithTracker((props, onData) => {
  const { search } = EventHorizon.subscribe('search');
  onData(null, { search });
})(Input);
