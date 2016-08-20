import React, { PropTypes } from 'react';
import Track from '../track/track';
import Like from './like';
import Add from './add';

const Item = ({ track, search }) => (
  <li className="queue-item">
    <Track track={track} />
    {
      search && <Add track={track} /> || <Like track={track} />
    }
  </li>
);

Item.propTypes = {
  track: PropTypes.object,
  search: PropTypes.bool,
};

export default Item;
