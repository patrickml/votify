import React, { PropTypes } from 'react';
import Track from '../track/track';
import Like from './like';

const Item = ({ track }) => (
  <li className="queue-item">
    <Track track={track} />
    <Like />
  </li>
);

export default Item;
