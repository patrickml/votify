import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import EventHorizon from 'meteor/patrickml:event-horizon';
import Votify from '/both/imports/app';
import Item from './item';

const List = ({ queueTracks, tracks, search }) => (
  <ul className="queue-list">
    {
      (search && tracks || queueTracks).map((track, key) => (
        <Item key={key} track={track} search={search} />
      ))
    }
  </ul>
);

List.propTypes = {
  queueTracks: PropTypes.array,
  tracks: PropTypes.array,
  search: PropTypes.bool,
};

export default composeWithTracker((props, onData) => {
  const { tracks } = EventHorizon.subscribe('search');
  Meteor.subscribe('queue');
  const queueTracks = Votify.Collections.Tracks().cursor().fetch();
  onData(null, {
    tracks,
    queueTracks,
    search: tracks.length > 0,
  });
})(List);
