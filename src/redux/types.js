// @flow

import type {Dispatch as ReduxDispatch} from 'redux';

import type {State as S} from './reducer';
export type State = S;

import type {ActionReduxPack as A} from './actions';
export type Action = A;

export type Dispatch = ReduxDispatch<Action>;
