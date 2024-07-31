import React, { useEffect, useMemo, useState } from 'react';
import { View, FlatList, Platform, Pressable } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import Screen from './Screen';
import Content from './Content';

import AppHeader from '../components/AppHeader';
import Books from '../components/Book/Books';
import AppText from '../components/AppText';
import storage from '../storage/storage';

function HomeScreen() {
  const isFocus = useIsFocused();
  const [storyInfo, setStoryInfo] = useState({
    type: [],
    config: {},
    news: '',
    storyInfo: [],
    storyList: [],
  });

  const [storyCache, setStoryCache] = useState({
    finish: null,
    continue: null,
  });

  const renderItem = ({ item }) => (
    <Books
      type={item}
      config={storyInfo.config[0]}
      nochapter={storyInfo?.nochapter}
      storyCache={storyCache}
      storyList={storyInfo?.storyList}
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/menu'
        );
        const newsData = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/news'
        );
        const type = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/story-type'
        );
        const nochapter = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/nochapter`
        );
        const storyList = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/story-list`
        );

        setStoryInfo({
          type: type?.data ?? [],
          config: config?.data ?? [],
          news: newsData?.data?.[0]?.news_content ?? '',
          nochapter: nochapter?.data ?? [],
          storyList: storyList?.data ?? [],
        });
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };
    async function getStories() {
      const finishStory = await storage.getStorys('finishStory');
      const continueStory = await storage.getStorys('continueStory');
      setStoryCache({ finishStory, continueStory });
    }
    fetchData();
    getStories();
  }, [isFocus]);

  return (
    <Screen style={{ backgroundColor: storyInfo.config?.[0]?.view_color }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          // paddingTop: wp('5%'),
          // width:200
        }}
      >
        <AppHeader />
        <Pressable onPress={() => storage.deleteAllStorage()}>
          <AppText
            style={{
              flex: 1,
              flexWrap: 'wrap',
              color: storyInfo.config?.[0]?.news_color ?? '#fff',
              marginLeft: 20,
              fontSize: storyInfo.config?.[0]?.news_font_size ?? 20,
              ...(storyInfo.config?.[0]?.news_weight === '粗' && {
                fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
              }),
            }}
            // numberOfLines={1}
          >
            {storyInfo.news}
          </AppText>
        </Pressable>
      </View>
      <Content>
        <FlatList
          data={storyInfo.type}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Screen>
  );
}

export default HomeScreen;
