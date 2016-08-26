import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import heart from '../../../assets/heart.png';

const styles = StyleSheet.create({
  image: {
    width: 19.44,
    height: 17.42,
  },
  container: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
  count: {
    textAlign: 'center',
    fontSize: 10,
  },
});

const Like = ({ votesCount }) => (
  <View style={styles.container}>
    <Image source={heart} style={styles.image} />
    <Text style={styles.count}>{votesCount}</Text>
  </View>
);

Like.propTypes = {
  votesCount: PropTypes.number,
};

export default Like;
