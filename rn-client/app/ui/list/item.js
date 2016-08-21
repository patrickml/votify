import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Like from './like';
import getArtists from '../../util/get-artists';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  artists: {
    fontWeight: '100',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

const Item = ({ album: { images }, name, artists, votesCount }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: images[0].url }}
    />
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.artists}>{getArtists(artists)}</Text>
    </View>
    <View style={{ flex: 1, height: 30 }}>
      <Like votesCount={votesCount} />
    </View>
  </View>
);

export default Item;
