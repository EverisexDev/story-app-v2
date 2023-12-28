import React, { useEffect, useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import Screen from './Screen';
import Content from './Content';

import AppHeader from '../components/AppHeader';
import Books from '../components/Book/Books';
import routes from '../navigations/routes';
import AppText from '../components/AppText';
import storage from '../storage/storage';

function HomeScreen() {
  const [storyInfo, setStoryInfo] = useState({
    type: [],
    config: {},
    news: '',
    storyInfo: [],
  });

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const renderItem = ({ item }) => (
    <Books
      type={item}
      config={storyInfo.config[0]}
      nochapter={storyInfo?.nochapter}
      storyStatus={storyStatus}
    />
  );

  const storyStatus = useMemo(() => {
    async function getStorys() {
      const finishStory = await storage.getStorys('finishStory');
      const continueStory = await storage.getStorys('continueStory');
      return { finishStory, continueStory };
    }
    return getStorys();
  }, []);

  useEffect(() => {
    // navigation.navigate(routes.CONTINUE);
    const fetchData = async () => {
      try {
        const menuConf = await axios.get(
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

        setStoryInfo({
          type: type?.data ?? [],
          config: menuConf?.data ?? [],
          news: newsData?.data?.[0]?.news_content ?? '',
          nochapter: nochapter?.data ?? [],
        });
        // if (response?.data && Array.isArray(response.data)) {
        //   // const storyTypes = response.data[0];
        //   // setStoryList(response?.data ?? []);
        // } else {
        //   throw new Error('API 請求成功，但未返回預期的數據');
        // }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Screen>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <AppHeader />
        <AppText
          style={{
            color: storyInfo.config?.[0]?.news_color ?? '#fff',
            marginLeft: 20,
            fontSize: 15 ?? storyInfo.config?.[0]?.news_font_size,
            fontWeight:
              storyInfo.config?.[0]?.news_weight === '粗' ? 'bold' : 'normal',
          }}
          numberOfLines={1}
        >
          最新消息：{storyInfo.news}
        </AppText>
      </View>
      <Content>
        <FlatList
          data={storyInfo.type}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={renderItem}
        />
      </Content>
    </Screen>
  );
}

export default HomeScreen;
