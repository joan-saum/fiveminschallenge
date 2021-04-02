// @flow

import {configureTests, mockStore, mockApiSuccess} from '../utils/mockFetch';

import reducer, {defaultState} from './reducer';

import actions from './actions';

describe('Reducer', () => {
  beforeAll(() => {
    configureTests();
  });

  it('should handle action GET_POPULAR_MOVIES', async () => {
    const store = mockStore(reducer, defaultState);

    mockApiSuccess({
      results: [
        {
          poster_path: 'image',
          title: 'title',
          overview: 'overview',
          id: 1,
        },
      ],
    });

    await store.dispatch(actions.getPopularMovies());

    expect(store.getState()).toMatchObject({
      items: [
        {
          title: 'title',
          overview: 'overview',
          id: 1,
          image: 'https://image.tmdb.org/t/p/originalimage',
        },
      ],
    });
  });

  it('should handle action SEARCH_MOVIES', async () => {
    const store = mockStore(reducer, defaultState);

    mockApiSuccess({
      results: [
        {
          poster_path: 'image',
          title: 'title',
          overview: 'overview',
          id: 1,
        },
      ],
    });

    await store.dispatch(actions.searchMovies('spiderman'));

    expect(store.getState()).toMatchObject({
      items: [
        {
          title: 'title',
          overview: 'overview',
          id: 1,
          image: 'https://image.tmdb.org/t/p/originalimage',
        },
      ],
    });
  });
});
