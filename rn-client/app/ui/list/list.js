import React, { PropTypes } from 'react';
import {
  ScrollView,
} from 'react-native';
import Item from './item';

const List = ({ tracks }) => (
  <ScrollView style={{ flex: 1 }}>
    {
      tracks.map((track, key) => (
        <Item {...track} key={key} />
      ))
    }
  </ScrollView>
);

List.propTypes = {
  tracks: PropTypes.array,
};

export default List;
