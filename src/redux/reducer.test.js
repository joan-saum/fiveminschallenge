// @flow

import {
  configureTests,
  mockStore,
  mockApiSuccess,
  mockApiFailure,
} from '../utils/mockFetch';

import type {State} from './reducer';
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

  // it('should handle action fetchById', async () => {
  //   // silent alerts in model parsing
  //   jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn());

  //   const store = mockStore(reducer);
  //   const activities = [createActivity(DailySerieSequentialActivity)];

  //   mockApiSuccess({
  //     activities: [DailySerieSequentialActivity],
  //     audience: { mode: 0, config: {}},
  //   });

  //   const promise = store.dispatch(actions.fetchById(1));

  //   expect(store.getState().isFetchLoading).toBe(true);

  //   await promise;

  //   expect(store.getState()).toMatchObject({
  //     activities,
  //     originalActivities: activities,
  //     isFetchLoading: false,
  //     selectedLanguageId: 8,
  //   });
  // });
});
