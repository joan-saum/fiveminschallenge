// @flow

import * as React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {configureTests} from '../../utils/mockFetch';

import Movie from './Movie';

configureTests();

const mockStore = configureStore([]);

jest.unmock('./Movie');

const defaultProps = {
  route: {
    params: {
      id: 1,
    },
  },
};

describe('Movie', () => {
  it('should render a movie', () => {
    const item = {id: 1, overview: 'overview', title: 'title', image: 'image'};
    const store = mockStore({
      items: [item],
    });
    const tree = renderer.create(
      <Provider store={store}>
        <Movie {...defaultProps} />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render nothing when the movie is not found', () => {
    const store = mockStore({
      items: [],
    });
    const tree = renderer.create(
      <Provider store={store}>
        <Movie {...defaultProps} />
      </Provider>,
    );

    expect(tree).toMatchInlineSnapshot('null');
  });
});
