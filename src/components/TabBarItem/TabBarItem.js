// @flow

import React, {useCallback} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import type {Node} from 'react';

import styles from './TabBarItem.style';

type Props = {|
  title: string,
  onPress: (title: string) => void,
|};

const TabBarItem = ({title, onPress}: Props): Node => {
  const onNavPress = useCallback(() => {
    onPress(title);
  }, [onPress, title]);

  return (
    <TouchableOpacity onPress={onNavPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabBarItem;
