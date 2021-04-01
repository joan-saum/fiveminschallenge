// @flow

import fetch from 'jest-fetch-mock';
import type {Store, Reducer, StoreEnhancer} from 'redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {middleware as reduxPackMiddleware} from 'redux-pack';

import type {Action, Dispatch} from '../redux/types';

export const mockApiSuccess = (response: any) => {
  fetch.mockResponseOnce(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const mockApiFailure = (response: any) => {
  fetch.mockResponseOnce(JSON.stringify(response), {
    status: 555,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const mockStore = <S>(
  reducer: Reducer<S, Action>,
  preloadedState?: S,
): Store<S, Action, Dispatch> => {
  const middlewares: StoreEnhancer<S, Action, Dispatch> = compose(
    applyMiddleware(reduxPackMiddleware),
  );

  return createStore(reducer, preloadedState, middlewares);
};

export const configureTests = () => {
  global.fetch = fetch;
};
