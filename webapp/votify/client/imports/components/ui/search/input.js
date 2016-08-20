import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'meteor/patrickml:event-horizon';
import search from '../../../spotify/search.api';
import { setTracks, setSearch } from '../../../actions/search.actions';

// debounce the search so we don't over load the spotify servers
const debounced = _.debounce((value) => {
  search(value).then((res) => setTracks(res.items));
}, 300);

// call the dounced search onChange
const onChange = (event) => {
  const value = event.target.value;
  // set the search
  setSearch(value);

  // search for tracks
  return debounced(value);
};

const Input = ({ search }) => (
  <input
    type="text"
    onChange={onChange}
    value={search}
    className="search-input"
    placeholder="Enter track or artist..."
  />
);

Input.propTypes = {
  search: PropTypes.string,
};

export default composeWithTracker((props, onData) => {
  const { search } = EventHorizon.subscribe('search');
  onData(null, { search });
})(Input);
