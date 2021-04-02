// @flow

import React, {useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import type {Node} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../redux/actions';
import type {MovieType} from '../../redux/reducer';

import type {NavigationProps} from '../../types/navigation';

import MovieItem from '../../components/MovieItem/MovieItem';
import InputSearch from '../../components/InputSearch/InputSearch';

type Props = {|
  navigation: NavigationProps,
|};

const Home = ({navigation}: Props): Node => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPopularMovies());
  }, [dispatch]);

  const navigateToMovie = useCallback(
    (id: number) => {
      navigation.navigate('Movie', {id});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: MovieType}) => {
      return <MovieItem {...item} onPress={navigateToMovie} />;
    },
    [navigateToMovie],
  );

  const keyExtractor = useCallback((item: MovieType) => {
    return item.id.toString();
  }, []);

  const searchMovies = useCallback(
    (search: string) => {
      if (search) {
        dispatch(actions.searchMovies(search));
      } else {
        dispatch(actions.getPopularMovies());
      }
    },
    [dispatch],
  );

  const header = useCallback(() => {
    return <InputSearch onSearch={searchMovies} />;
  }, [searchMovies]);

  const items = useSelector(state => state.items);

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      ListHeaderComponent={header}
      keyExtractor={keyExtractor}
    />
  );
};

export default Home;
