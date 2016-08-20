import React, { PropTypes } from 'react';
import Track from '../track/track';
import Like from './like';

const Item = () => (
  <li className="queue-item">
    <Track />
    <Like />
  </li>
);

export default Item;
