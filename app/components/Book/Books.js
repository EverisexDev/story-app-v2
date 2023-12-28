import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';
import Book from './Book';
import axios from 'axios';

function Books({ type, config, nochapter, storyStatus }) {
  const [storyList, setStoryList] = useState();

  const renderItem = ({ item }) => (
    <Book
      {...item}
      config={config}
      noChapter={noChapter}
      storyStatus={storyStatus}
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // if (type?.lang === '繁體中文') {
          const story = await axios.get(
            `http://api.xstudio-mclub.url.tw/api/v1/admin/main-menu/${type?.id}`
          );
          const storyList = await axios.get(
            `http://api.xstudio-mclub.url.tw/api/v1/admin/story-list/${type?.id}`
          );
          // ...storyList?.data
          const menu = [{...story?.data,...storyList?.data }];
          // const menu = story?.data ? [story?.data] : [];
          // const list = storyList?.data ? [storyList?.data] : [];
          setStoryList(menu);
        // }

        // if (storyList?.data && Array.isArray(storyList.data)) {
        // } else {
        //   throw new Error('API 請求成功，但未返回預期的數據');
        // }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };

    fetchData();
  }, []);

  const noChapter = useMemo(() => {
    if (!nochapter) return null;
    return nochapter?.find((e) => {
      return +e.storyid === +storyList?.[0]?.id;
    });
  }, [storyList, nochapter]);
  console.log(storyList);
  return (
    <View style={styles.container}>
      {!storyList?.length ? null : (
        <>
          <AppText style={styles.type}>{type?.story_type}</AppText>
          <FlatList
            data={storyList}
            keyExtractor={(item) => item?.id?.toString()}
            horizontal={true}
            renderItem={renderItem}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  type: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.leftChatBackground,
  },
  name: {
    fontSize: 21,
  },
});

export default Books;
