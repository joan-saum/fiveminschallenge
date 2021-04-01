// @flow

import React, {useCallback} from 'react';
import {View} from 'react-native';
import type {Node} from 'react';

import type {NavigationProps} from '../../types/navigation';

import TabBarItem from '../TabBarItem/TabBarItem';

import styles from './TabBar.style';

type Props = {|
  navigation: NavigationProps,
  routeNames: $ReadOnlyArray<string>,
|};

const TabBar = ({navigation, routeNames}: Props): Node => {
  const onPress = useCallback(
    (route: string) => {
      navigation.navigate(route);
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      {routeNames.map(r => (
        <TabBarItem key={r} title={r} onPress={onPress} />
      ))}
    </View>
  );
};

export default TabBar;
