// @flow

import type {NavigationProps} from '../types/navigation';

const navigation: NavigationProps = {
  setParams: jest.fn().mockName('setParams'),
  getParam: jest.fn().mockName('getParam'),
  navigate: jest.fn().mockName('navigate'),
  dangerouslyGetParent: jest.fn().mockName('dangerouslyGetParent'),
  goBack: jest.fn().mockName('goBack'),
  addListener: jest.fn().mockName('addListener'),
  isFocused: jest.fn().mockName('isFocused'),
  push: jest.fn().mockName('push'),
  pop: jest.fn().mockName('pop'),
  popToTop: jest.fn().mockName('popToTop'),
  dismiss: jest.fn().mockName('dismiss'),
  state: {},
};

export default navigation;
