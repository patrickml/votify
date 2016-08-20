import React, { PropTypes } from 'react';
import Votify from '/both/imports/app';
import { resetSearch } from '../../../actions/search.actions';

const onClick = (track) => () => (
  Votify.Collections.Tracks().create(track).then(resetSearch)
);

const Add = ({ track }) => (
  <div className="add" onClick={onClick(track)}>
    <i className="lnr lnr-cross" />
  </div>
);

Add.propTypes = {
  track: PropTypes.object,
};

export default Add;
