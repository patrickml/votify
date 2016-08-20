import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'meteor/patrickml:event-horizon';
import Item from './item';

const List = ({ tracks }) => (
  <ul className="queue-list">
    {
      tracks.map((track, key) => (
        <Item key={key} track={track} />
      ))
    }
  </ul>
);

List.propTypes = {
  tracks: PropTypes.array,
};

export default composeWithTracker((props, onData) => {
  const { tracks } = EventHorizon.subscribe('search');
  onData(null, {
    tracks,
  });
})(List);
