import React, { PropTypes } from 'react';
import Track from '../track/track';
import Like from './like';
import Add from './add';

const Playing = () => <div className="playing">
  <div id="bars">
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
</div>;

const Item = ({ track, search }) => {
  if (track.playing) {
    return (
      <li className="queue-item">
        <Track track={track} />
        <Playing />
        {
          search && <Add track={track} /> || <Like track={track} />
        }
      </li>);
  } else {
    return (
      <li className="queue-item">
        <Track track={track} />
        {
          search && <Add track={track} /> || <Like track={track} />
        }
      </li>);
  }
};

Item.propTypes = {
  track: PropTypes.object,
  search: PropTypes.bool,
};

export default Item;
