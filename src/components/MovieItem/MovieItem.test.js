// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import {TouchableWithoutFeedback} from 'react-native';

import MovieItem from './MovieItem';

jest.unmock('./MovieItem');

const defaultProps = {
  image: 'image',
  title: 'title',
  overview: 'overview',
  id: 1,
  onPress: jest.fn().mockName('onPress'),
};

describe('MovieItem', () => {
  it('should render a MovieItem', () => {
    const tree = renderer.create(<MovieItem {...defaultProps} />);

    expect(tree).toMatchSnapshot();
  });

  it('should call onPress when clicking on the item', () => {
    const onPress = jest.fn().mockName('onPress');
    const tree = renderer.create(
      <MovieItem {...defaultProps} onPress={onPress} />,
    );

    expect(onPress).toHaveBeenCalledTimes(0);

    tree.root.findByType(TouchableWithoutFeedback).props.onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(1);
  });
});
