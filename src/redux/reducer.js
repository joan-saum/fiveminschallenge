// @flow

import {handle} from 'redux-pack';

import type {ActionReduxPack} from './actions';

export const typedHandle = <T>(
  state: T,
  action: ActionReduxPack,
  handlers: {|
    start?: T => T,
    success?: T => T,
    failure?: T => T,
    finish?: T => T,
    always?: T => T,
  |},
): T => handle(state, action, handlers);

export type MovieType = {|
  image: string,
  title: string,
  overview: string,
  id: number,
|};

export type State = {|
  +items: $ReadOnlyArray<MovieType>,
|};

const IMG_URL = 'https://image.tmdb.org/t/p/original';

const defaultState = {
  items: [],
};

const reducer = (
  state: State = defaultState,
  action: ActionReduxPack,
): State => {
  const {type, payload} = action;

  switch (type) {
    case 'GET_POPULAR_MOVIES':
      return typedHandle(state, action, {
        success: prevState => {
          const {results} = payload;

          const items = results.map(r => ({
            image: `${IMG_URL}${r.poster_path}`,
            title: r.title,
            overview: r.overview,
            id: r.id,
          }));

          return {
            ...prevState,
            items,
          };
        },
      });

    case 'SEARCH_MOVIES':
      return typedHandle(state, action, {
        success: prevState => {
          const {results} = payload;

          const items = results.map(r => ({
            image: `${IMG_URL}${r.poster_path}`,
            title: r.title,
            overview: r.overview,
            id: r.id,
          }));

          return {
            ...prevState,
            items,
          };
        },
      });

    default:
      return state;
  }
};

export default reducer;
