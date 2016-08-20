import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'meteor/patrickml:event-horizon';
import { playTrack, stopPlaying } from '../../../actions/player.actions';

/**
 * Returns a style object with a the cover background image
 * @method getBackground
 * @param  {String}      url the url of the cover background image
 * @return {Object}
 */
const getBackground = (url) => (
  {
    background: `url(${url}) no-repeat center center/cover`,
  }
);

const Cover = ({ url, playing, previewUrl }) => (
  <div
    className="album"
    style={getBackground(url)}
    onClick={() => playing && stopPlaying() || playTrack(previewUrl)}
  >
    {
      <div className={`action ${playing && 'stop' || 'play'}`} />
    }
  </div>
);

Cover.propTypes = {
  url: PropTypes.string,
  playing: PropTypes.bool,
  previewUrl: PropTypes.string,
};

export default composeWithTracker((props, onData) => {
  const { src, playing } = EventHorizon.subscribe('player');
  onData(null, {
    playing: playing && props.previewUrl === src,
  });
})(Cover);
