import React from 'react';
import List from '../ui/queue/list';
import Search from '../ui/search/input';

const Queue = () => (
  <div className="page" id="queue">
    <Search />
    <List />
  </div>
);

export default Queue;
