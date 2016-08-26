import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Meteor } from 'meteor/meteor';
import EventHorizon from 'meteor/patrickml:event-horizon';
import Votify from '/both/imports/app';
import Item from './item';

const transition = {
  transitionName: 'list-item-animation',
  transitionEnterTimeout: 300,
  transitionLeaveTimeout: 300,
};

const List = ({ queueTracks, tracks, search, query }) => (
  <div>
    <ReactCSSTransitionGroup {...transition} className="queue-list" component="ul">
      {
        (search && tracks || queueTracks).map((track) => (
          <Item key={track.id} track={track} search={search} />
        ))
      }
    </ReactCSSTransitionGroup>
    <div className="no-content">
      {
        search && tracks.length < 1 && `Sorry, we don't have any songs for ${query}` || (
          !search && queueTracks.length < 1 && (
            `Hmmm... There are no songs in queue.
            If you add one now, we will play your song right away!`
          )
        )
      }
    </div>
  </div>
);

List.propTypes = {
  queueTracks: PropTypes.array,
  tracks: PropTypes.array,
  search: PropTypes.bool,
  query: PropTypes.string,
};

export default composeWithTracker((props, onData) => {
  Meteor.subscribe('queue');
  const { tracks, search } = EventHorizon.subscribe('search');
  const queueTracks = Votify.Collections.Tracks()
    .sortBy('playing', -1)
    .sortBy('votesCount', -1)
    .sortBy('createdAt', 1)
    .cursor()
    .fetch();
  onData(null, {
    tracks,
    queueTracks,
    search: !!search,
    query: search || '',
  });
})(List);
