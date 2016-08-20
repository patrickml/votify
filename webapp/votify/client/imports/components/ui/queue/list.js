import React, { PropTypes } from 'react';
import Item from './item';

const List = () => (
  <ul className="queue-list">
    {
      new Array(100).fill(0).map((track, key) => (
        <Item key={key} track={track} />
      ))
    }
  </ul>
);

export default List;
