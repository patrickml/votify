import React from 'react';
import List from '../ui/queue/list';
import Search from '../ui/search/input';
import Player from '../ui/queue/player';

const Queue = () => (
  <div className="page" id="queue">
    <Search />
    <List />
    <Player />
  </div>
);

export default Queue;
