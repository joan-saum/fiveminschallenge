// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import navigation from '../../utils/mockNavigation';
import TabBarItem from '../TabBarItem/TabBarItem';

import TabBar from './TabBar';

jest.unmock('./TabBar');

describe('TabBar', () => {
  it('should render a TabBar', () => {
    const routeNames = ['Home', 'MyList'];
    const tree = renderer.create(
      <TabBar navigation={navigation} routeNames={routeNames} />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should assert navigate is called when clicking on a TabBarItem', () => {
    const routeNames = ['Home', 'MyList'];
    const spyNavigationNavigate = jest.spyOn(navigation, 'navigate');
    const tree = renderer.create(
      <TabBar navigation={navigation} routeNames={routeNames} />,
    );

    expect(spyNavigationNavigate).toHaveBeenCalledTimes(0);

    tree.root.findAllByType(TabBarItem)[1].props.onPress('route');

    expect(spyNavigationNavigate).toHaveBeenCalledTimes(1);
    expect(spyNavigationNavigate).toHaveBeenCalledWith('route');
  });
});
