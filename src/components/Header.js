import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
  PixelRatio,
} from 'react-native';
import Back from '../assets/images/Back.png';
import Search from '../assets/images/search.png';

const Header = props => {
  const {screenName, onClickBack, onClickSearch} = props;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={onClickBack}
          style={styles.backIconContainer}>
          <Image source={Back} style={styles.backIcon} resizeMode={'contain'} />
        </TouchableOpacity>
        <Text style={styles.screenName}>{screenName}</Text>
      </View>
      <TouchableOpacity
        onPress={onClickSearch}
        style={styles.backIconContainer}>
        <Image source={Search} style={styles.backIcon} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    height: PixelRatio.getPixelSizeForLayoutSize(36),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: PixelRatio.getPixelSizeForLayoutSize(12),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
    margin: PixelRatio.getPixelSizeForLayoutSize(8),
  },
  screenName: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    color: 'white',
    fontFamily: 'TitilliumWeb-Regular',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
  },
});
