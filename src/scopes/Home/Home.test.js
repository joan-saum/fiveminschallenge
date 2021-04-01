// @flow

import * as React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {FlatList} from 'react-native';

import actions from '../../redux/actions';
import {defaultState} from '../../redux/reducer';

import {configureTests} from '../../utils/mockFetch';

configureTests();

import Home from './Home';

const mockStore = configureStore([]);

jest.unmock('./Home');

const defaultProps = {};

jest.useFakeTimers();

describe('Home', () => {
  it('should render a list of data', () => {
    const item = {id: 1, overview: 'overview', title: 'title', image: 'image'};
    const store = mockStore({
      items: [item],
    });
    const tree = renderer.create(
      <Provider store={store}>
        <Home {...defaultProps} />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();

    const key = tree.root.findByType(FlatList).props.keyExtractor(item);

    expect(key).toBe('1');

    // For the action dispatched
    jest.advanceTimersByTime(1);
    expect(store.getActions()).toStrictEqual([actions.getPopularMovies()]);
  });

  it('should render the header of the list', () => {
    const store = mockStore(defaultState);
    const tree = renderer.create(
      <Provider store={store}>
        <Home {...defaultProps} />
      </Provider>,
    );

    const header = tree.root.findByType(FlatList).props.ListHeaderComponent();

    const headerCreated = renderer.create(header);

    expect(headerCreated).toMatchSnapshot();
  });

  it('should dispatch the action search movies when searching a movie', () => {
    const store = mockStore(defaultState);
    const tree = renderer.create(
      <Provider store={store}>
        <Home {...defaultProps} />
      </Provider>,
    );

    jest.advanceTimersByTime(1);

    const header = tree.root.findByType(FlatList).props.ListHeaderComponent();

    header.props.onSearch('test');
    jest.advanceTimersByTime(1);

    expect(store.getActions()).toStrictEqual([
      actions.getPopularMovies(),
      actions.searchMovies('test'),
    ]);
  });

  it('should dispatch the action get popular movies when entering an empty search', () => {
    const store = mockStore(defaultState);
    const tree = renderer.create(
      <Provider store={store}>
        <Home {...defaultProps} />
      </Provider>,
    );

    jest.advanceTimersByTime(1);

    const header = tree.root.findByType(FlatList).props.ListHeaderComponent();

    header.props.onSearch('');
    jest.advanceTimersByTime(1);

    expect(store.getActions()).toStrictEqual([
      actions.getPopularMovies(),
      actions.getPopularMovies(),
    ]);
  });
});
