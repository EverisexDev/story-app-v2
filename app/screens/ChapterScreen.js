import { View, Alert, FlatList } from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ChapterItem from '../components/ChapterItem';
import AppText from '../components/AppText';

import { useRoute } from '@react-navigation/native';

const ChapterScreen = () => {
  const [queryInfo, setQueryInfo] = useState({
    listData: [],
    toastConfig: {},
  });
  const routes = useRoute();

  const { name, author, storyId, storyData, nochapter, view_color } = useMemo(
    () => routes.params ?? { name: '', author: '', storyId: 1 },
    [routes.params]
  );

  const renderItem = ({ item, index }) => (
    <ChapterItem
      {...item}
      toastConfig={queryInfo?.toastConfig}
      index={index}
      storyId={storyId}
      author={author}
      storyData={storyData}
      nochapter={nochapter}
      uiConfig={queryInfo?.uiConfig}
      storyName={name}
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapterList = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/chapter/${storyId}`
        );
        const toastConfig = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter-foolproof'
        );
        const uiConfig = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter'
        );

        setQueryInfo({
          listData: chapterList?.data ?? [],
          toastConfig: toastConfig?.data?.[1] ?? {},
          uiConfig: uiConfig?.data?.[0] ?? {},
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
    <View style={{ flex: 1, backgroundColor: view_color ?? '#fff' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}
      >
        <AppText>{name}</AppText>
        <AppText>{author}</AppText>
      </View>
      <FlatList
        data={queryInfo?.listData}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ flexDirection: 'column', padding: 20 }}
      />
    </View>
  );
};

export default ChapterScreen;
