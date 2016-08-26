import React from 'react';
import List from '../ui/queue/list';
import Search from '../ui/search/input';
import AlbumModal from '../ui/search/albumModal';
import Player from '../ui/queue/player';

const Queue = () => (
  <div className="page" id="queue">
    <Search />
    <List />
    <Player />
    <AlbumModal />
  </div>
);

export default Queue;
