import React, { PropTypes } from 'react';
import { Session } from 'meteor/session';

const onClick = (track) => () => {
  if (track.votes.indexOf(Session.get('uuid')) !== -1) {
    track
      .pull('votes', Session.get('uuid'))
      .set('votesCount', track.votesCount - 1)
      .save();
  } else {
    track
      .addToSet('votes', Session.get('uuid'))
      .set('votesCount', track.votesCount + 1)
    .save();
  }
};

const Like = ({ track }) => (
  track.votes.indexOf(Session.get('uuid')) !== -1 && (
    <div className="like" data-count={track.votes.length} onClick={onClick(track)}>
      <i className="lnr lnr-heart liked" />
    </div>
  ) || (
    <div className="like" data-count={track.votes.length} onClick={onClick(track)}>
      <i className="lnr lnr-heart" />
    </div>
  )
);

Like.propTypes = {
  track: PropTypes.object,
};

export default Like;
