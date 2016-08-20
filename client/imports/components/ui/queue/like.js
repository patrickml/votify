import React, { PropTypes } from 'react';
import { Session } from 'meteor/session'

const onClick = (track) => () => {
  if (track.votes.indexOf(Session.get('uuid')) != -1 ) {
    track.pull('votes', Session.get('uuid')).save()
  }
  else {
  // Assign extra field w/ current User identifier to track 'upvotes'
  track.addToSet('votes', Session.get('uuid')).save()
}
}

const Like = ({track}) => {
  // Already liked
  if (track.votes.indexOf(Session.get('uuid')) != -1) {
    return (
      <div className="like" data-count={track.votes.length} onClick={onClick(track)}>
        <i className="lnr lnr-heart liked" />
      </div>
    )
  }
  else {
    return (
      <div className="like" data-count={track.votes.length} onClick={onClick(track)}>
        <i className="lnr lnr-heart" />
      </div>
    )
  }

}

export default Like;
