import * as React from 'react';
import {Text, View, StyleSheet, Image, PixelRatio} from 'react-native';
import {ItemImage} from '../common/ItemImageService';

const Item = props => {
  const {item} = props;
  // function to find image souce from assets according to its poster name
  const image = ItemImage.GetImage(item['poster-image']);
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} resizeMode={'contain'} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  image: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  title: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
    color: 'white',
    fontFamily: 'TitilliumWeb-Light',
  },
});
