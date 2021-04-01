// @flow

import api from './api';

export type Action = {|
  type: string,
  promise: Promise<any>,
  payload: any,
|};

const actions = {
  getPopularMovies: (): Action => ({
    type: 'GET_POPULAR_MOVIES',
    promise: api('/movie/popular'),
    payload: '',
  }),

  searchMovies: (search: string): Action => ({
    type: 'SEARCH_MOVIES',
    promise: api('/search/movie', {query: search}),
    payload: '',
  }),
};

export default actions;
