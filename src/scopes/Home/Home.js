// @flow

import React, {useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import type {Node} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import actions from '../../redux/actions';
import type {MovieType} from '../../redux/reducer';

import MovieItem from '../../components/MovieItem/MovieItem';
import InputSearch from '../../components/InputSearch/InputSearch';

type Props = {||};

const Home = ({}: Props): Node => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPopularMovies());
  }, [dispatch]);

  const navigateToItem = useCallback((id: number) => {
    return null;
  }, []);

  const renderItem = useCallback(({item}: {item: MovieType}) => {
      return <MovieItem {...item} onPress={navigateToItem} />;
    },
    [navigateToItem],
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
