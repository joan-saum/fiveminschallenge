// @flow

import * as React from 'react';
import renderer, {act} from 'react-test-renderer';
import {TextInput} from 'react-native';

import InputSearch from './InputSearch';

jest.unmock('./InputSearch');

jest.useFakeTimers();

describe('InputSearch', () => {
  it('should render a InputSearch', () => {
    const onSearch = jest.fn().mockName('onSearch');
    const tree = renderer.create(<InputSearch onSearch={onSearch} />);

    expect(tree).toMatchSnapshot();
  });

  it('should call onSearch only after 1 second without changes', () => {
    const onSearch = jest.fn().mockName('onSearch');
    const tree = renderer.create(<InputSearch onSearch={onSearch} />);

    expect(onSearch).toHaveBeenCalledTimes(0);

    act(() => {
      tree.root.findByType(TextInput).props.onChangeText('test');

      expect(onSearch).toHaveBeenCalledTimes(0);
      jest.advanceTimersByTime(500);
      expect(onSearch).toHaveBeenCalledTimes(0);

      tree.root.findByType(TextInput).props.onChangeText('test2');
      expect(onSearch).toHaveBeenCalledTimes(0);
      jest.advanceTimersByTime(500);
      expect(onSearch).toHaveBeenCalledTimes(0);
      jest.advanceTimersByTime(500);
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch).toHaveBeenCalledWith('test2');
    });

    tree.unmount();
  });
});
