import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  PixelRatio,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import Item from '../components/Item';

function Home() {
  const [data, setData] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const {page} = require('../mockData/CONTENTLISTINGPAGE-PAGE1.json');
    let content = [...page['content-items']['content']];
    setData({
      ...page,
      content,
    });
  }, []);

  // function to fetch more data as we scroll down 
  const fetchMore = () => {
    if (data?.content.length < parseInt(data['total-content-items'])) {
      const customData =
        parseInt(data['page-num-requested']) === 1
          ? require('../mockData/CONTENTLISTINGPAGE-PAGE2.json')
          : require('../mockData/CONTENTLISTINGPAGE-PAGE3.json');
      const {page} = customData;
      let content = [...data['content'], ...page['content-items']['content']];
      setData({
        ...page,
        content,
      });
    }
  };

  // get data for show according to search text is available or not
  const getData = () => {
    let newData = data?.content;
    if (isSearch && searchText.length > 0) {
      newData = data?.content.filter(item => {
        return item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      });
    }
    return newData;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header
        screenName={data?.title}
        onClickBack={() => {}}
        onClickSearch={() => setIsSearch(!isSearch)}
      />
      {isSearch ? (
        <TextInput
          style={styles.textInput}
          placeholder="Search here..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      ) : null}
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={getData()}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item, index) => index}
        numColumns={3}
        columnWrapperStyle={{gap: PixelRatio.getPixelSizeForLayoutSize(8)}}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchMore}
        onEndReachedThreshold={PixelRatio.getPixelSizeForLayoutSize(50)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flatlist: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(8),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(30),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
    color: 'white',
  },
});

export default Home;
