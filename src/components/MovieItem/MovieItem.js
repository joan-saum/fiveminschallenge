// @flow

import React, {useCallback, useMemo} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import type {Node} from 'react';

import styles from './MovieItem.style';

type Props = {|
  onPress: (id: number) => void,
  image: string,
  title: string,
  overview: string,
  id: number,
|};

const MovieItem = ({image, title, overview, id, onPress}: Props): Node => {
  const onPressItem = useCallback(() => {
    onPress(id);
  }, [onPress, id]);

  const source = useMemo(
    () => ({
      uri: image,
    }),
    [image],
  );

  return (
    <TouchableWithoutFeedback onPress={onPressItem}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text
            numberOfLines={4}
            textBreakStrategy="simple"
            style={styles.text}>
            {overview}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieItem;
