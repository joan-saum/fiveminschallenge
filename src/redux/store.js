// @flow

import {createStore, applyMiddleware, compose} from 'redux';
import {middleware as reduxPackMiddleware} from 'redux-pack';

import type {State, Action, Dispatch} from './types';
import type {Store} from 'redux';
import reducer from './reducer';

export const store: Store<State, Action, Dispatch> = createStore<
  State,
  Action,
  Dispatch,
>(reducer, compose(applyMiddleware(reduxPackMiddleware)));
