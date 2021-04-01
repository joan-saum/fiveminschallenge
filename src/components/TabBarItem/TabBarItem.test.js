// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';

import TabBarItem from './TabBarItem';

jest.unmock('./TabBarItem');

describe('TabBarItem', () => {
  it('should render a TabBarItem', () => {
    const onPress = jest.fn().mockName('onPress');
    const tree = renderer.create(
      <TabBarItem onPress={onPress} title="title" />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should trigger the onPress callback when the component is clicked', () => {
    const onPress = jest.fn().mockName('onPress');
    const title = 'title';
    const tree = renderer.create(
      <TabBarItem onPress={onPress} title={title} />,
    );

    expect(onPress).toHaveBeenCalledTimes(0);

    tree.root.findByType(TouchableOpacity).props.onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(title);
  });
});
