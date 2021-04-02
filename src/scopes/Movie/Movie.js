// @flow

import React, {useMemo} from 'react';
import {Text, Image, View} from 'react-native';
import {useSelector} from 'react-redux';

import type {Node} from 'react';

import {getMovieById} from '../../redux/selectors';

import styles from './Movie.style';

type RouteProp = {|
  params: {|
    id: number,
  |},
|};

type Props = {|
  route: RouteProp,
|};

const Movie = ({route}: Props): Node => {
  const {id} = route.params;
  const movie = useSelector(state => getMovieById(state, id));

  const source = useMemo(
    () => ({
      uri: movie ? movie.image : '',
    }),
    [movie],
  );

  if (!movie) {
    return null;
  }

  return (
    <View>
      <Image source={source} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

export default Movie;
