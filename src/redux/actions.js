// @flow

import api from './api';

export type ActionCreated = {|
  type: string,
  promise: Promise<any>,
|};

export type ActionReduxPack = {|
  type: string,
  promise: Promise<any>,
  payload: any,
|};

const actions = {
  getPopularMovies: (): ActionCreated => ({
    type: 'GET_POPULAR_MOVIES',
    promise: api('/movie/popular'),
  }),

  searchMovies: (search: string): ActionCreated => ({
    type: 'SEARCH_MOVIES',
    promise: api('/search/movie', {query: search}),
  }),
};

export default actions;
