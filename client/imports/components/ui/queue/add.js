import React, { PropTypes } from 'react';
import Votify from '/both/imports/app';
import { resetSearch } from '../../../actions/search.actions';
import { Session } from 'meteor/session';
import Alert from 'react-s-alert';

/**
 * Creates a track in queue then reset the search
 * @method onClick
 * @param  {Object} track the track to add
 * @return {Promise}
 */
const onClick = (track) => () => (
  // Assign extra field w/ current User identifier to track 'upvotes'
  Votify.Collections.Tracks()
    .create(Object.assign({}, track, {
      createdAt: new Date(),
      createdBy: Session.get('uuid'),
      votes: [Session.get('uuid')],
      votesCount: 1,
    }))
    .then(resetSearch)
    .then(() => (
      Alert.success(`${track.name} added to queue!`)
    ))
    .catch(e => (
      Alert.error(e.reason)
    ))
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
