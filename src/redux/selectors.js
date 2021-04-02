// @flow

import type {State, MovieType} from './reducer';

export const getMovieById = (state: State, id: number): ?MovieType =>
  state.items.find(item => item.id === id);
