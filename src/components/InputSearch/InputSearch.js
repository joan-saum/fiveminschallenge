// @flow

import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import type {Node} from 'react';

import styles from './InputSearch.style';

type Props = {|
  onSearch: (search: string) => void,
|};

let timeoutIDSearchMovie: TimeoutID | null = null;
const TIME_BEFORE_FETCH = 2000;

const InputSearch = ({onSearch}: Props): Node => {
  const [text, onChangeText] = useState('');

  const onFilterChanged = useCallback(
    (search: string) => {
      clearTimeout(timeoutIDSearchMovie);

      timeoutIDSearchMovie = setTimeout(() => {
        onSearch(search);
      }, TIME_BEFORE_FETCH);

      onChangeText(search);
    },
    [onChangeText, onSearch],
  );

  useEffect(() => {
    return () => clearTimeout(timeoutIDSearchMovie);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Search:</Text>
      <TextInput
        onChangeText={onFilterChanged}
        value={text}
        style={styles.input}
      />
    </View>
  );
};

export default InputSearch;
