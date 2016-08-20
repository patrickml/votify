import React, { PropTypes } from 'react';
import ReactHowler from 'react-howler';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'meteor/patrickml:event-horizon';
import { stopPlaying } from '../../../actions/player.actions';

const Player = ({ src, playing }) => (
  src && <ReactHowler src={`${src}.mp3`} playing={playing} onEnd={stopPlaying} />
);

Player.propTypes = {
  src: PropTypes.string,
  playing: PropTypes.bool,
};

export default composeWithTracker((props, onData) => {
  onData(null, EventHorizon.subscribe('player'));
})(Player);
