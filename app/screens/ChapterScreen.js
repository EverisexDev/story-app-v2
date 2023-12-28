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

  const { name, author } = useMemo(
    () => routes.params ?? { name: '', author: '' },
    [routes.params]
  );
console.log({ name, author } )
  const renderItem = ({ item, index }) => (
    <ChapterItem {...item} toastConfig={queryInfo?.toastConfig} index={index} />
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapterList = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/chapter'
        );
        const toastConfig = await axios.get(
          'http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter-foolproof'
        );
        setQueryInfo({
          listData: chapterList?.data ?? [],
          toastConfig: toastConfig?.data?.[1] ?? {},
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
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <AppText>{name}</AppText>
        <AppText>{author}</AppText>
      </View>
      <FlatList
        data={queryInfo?.listData}
        keyExtractor={(item) => item?.id?.toString()}
        // horizontal={true}
        renderItem={renderItem}
        contentContainerStyle={{ flexDirection: 'column', padding: 20 }}
        // ItemSeparatorComponent={() => <View style={{ height: 20, width:300 }}></View>}
      />
    </View>
  );
};

export default ChapterScreen;
