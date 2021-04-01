import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    height: 140,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'flex',
    width: 120,
  },
  image: {
    flex: 1,
  },
  content: {
    padding: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
  },
});

export default style;
