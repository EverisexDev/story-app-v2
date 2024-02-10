import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  Platform,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import colors from '../config/colors';

import Narrator from '../components/narrator/Narrator';
import StoryHeader from '../components/StoryHeader';
import Chat from '../components/chat/Chat';
import storage from '../storage/storage';
import { useRoute } from '@react-navigation/native';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';
const initStoryIdx = 5;

function StoryScreen({ route, navigation }) {
  const routes = useRoute();

  const {
    storyId = 1,
    chapterId = 1,
    author = '',
    name = '',
    screenId = null,
    storyData = {},
    nochapter = [],
  } = routes.params;

  const [index, setIndex] = useState({
    story: initStoryIdx,
    screen: null,
  });
  const [story, setStory] = useState([]);
  const [queryInfo, setQueryInfo] = useState({
    config: [],
    screenings: {},
    content: null,
    role: {},
    imageUrl: '',
  });
  const flatlistRef = useRef(null);

  const cacheData = useMemo(
    () => ({
      screenId: queryInfo.screenings?.[index.screen]?.id,
      storyId,
      chapterId,
      storyData,
      nochapter,
    }),
    [queryInfo.screenings, index.screen]
  );

  const onPressOption = (idx) => {
    if (idx) {
      let id = 0;
      queryInfo.content?.find((e, i) => {
        if (+e.order === +idx) {
          id = i;
        }
      });
      setIndex((prev) => ({
        ...prev,
        story: id,
      }));
    } else {
      setIndex((prev) => ({
        ...prev,
        story: prev.story + 1,
      }));
    }
  };

  useEffect(() => {
    // set next scene
    const fetchStories = async () => {
      try {
        const _id = queryInfo.screenings?.[index.screen]?.id;
        if (_id) {
          const content = await axios.get(
            `http://api.xstudio-mclub.url.tw/api/v1/admin/content/${storyId}/${chapterId}/${_id}`
          );
          if (content?.data.length) {
            const storyContent = content?.data
              ?.slice()
              .sort((a, b) => a?.order - b?.order);

            setQueryInfo((prev) => ({
              ...prev,
              content: storyContent,
              imageUrl: domain + queryInfo?.screenings?.[index.screen]?.bg_view,
            }));

            storage.storeStory(cacheData, 'continueStory');
          }
        } else {
          // 故事結束，儲存到再次回味畫面
          storage.storeStory({ storyId, storyData, nochapter }, 'finishStory');

          //故事結束，刪除繼續觀賞畫面
          storage.deleteStory({ storyId }, 'continueStory');
          navigation.goBack();
        }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };
    if (index.screen > 0) {
      fetchStories();
    }
  }, [index.screen]);

  useEffect(() => {
    if (!queryInfo?.content) return;

    if (queryInfo?.content[index.story]?.contentPresent === '結尾') {
      setIndex((prev) => ({
        story: initStoryIdx,
        screen: prev.screen + 1,
      }));
    } else if (index.story === initStoryIdx) {
      setStory(queryInfo?.content?.slice(0, index.story));
      setTimeout(() => {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          viewPosition: 0,
          animated: false,
        });
      }, 100);
    } else {
      setStory((prev) => [...prev, queryInfo?.content[index.story]]);
      setTimeout(() => {
        flatlistRef.current.scrollToEnd({
          animated: true,
        });
      }, 100);
    }
  }, [index.story, queryInfo?.content]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-list`
        );
        const screenings = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/screenings/${storyId}/${chapterId}`
        );
        const role = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/role`
        );
        const roleConf = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-role`
        );
        if (screenId || screenings?.data?.length) {
          const content = await axios.get(
            `http://api.xstudio-mclub.url.tw/api/v1/admin/content/${storyId}/${chapterId}/${
              screenId ?? screenings?.data?.[0].id
            }`
          );
          const storyContent = content?.data
            ?.slice()
            .sort((a, b) => a?.order - b?.order);

          setQueryInfo({
            config: config?.data[0] ?? {},
            screenings: screenings?.data ?? {},
            role: role?.data ?? {},
            content: storyContent,
            imageUrl: domain + screenings?.data?.[screenId ?? 0]?.bg_view,
            roleConf: roleConf?.data?.[0],
          });
          setIndex((prev) => ({
            ...prev,
            screen: screenId ?? 0,
          }));

          storage.storeStory(cacheData, 'continueStory');
        }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        fadeDuration={2000}
        style={styles.container}
        resizeMode='cover'
        source={
          queryInfo?.imageUrl
            ? {
                uri: queryInfo?.imageUrl,
              }
            : null
        }
      >
        <StoryHeader
          storyName={name}
          author={author}
          config={queryInfo?.config}
        />
        <FlatList
          data={story}
          ref={flatlistRef}
          keyExtractor={(item) => item?.id?.toString()}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Pressable onPress={() => onPressOption(null)}>
                <>
                  {item?.contentPresent === '對話' ? (
                    <Chat
                      {...item}
                      textMsg={item?.textContent}
                      imgMsg={item?.graphy}
                      soundMsg={item?.voice}
                      videoMsg={item?.video}
                      roleList={queryInfo?.role}
                      index={index}
                      roleConf={queryInfo?.roleConf}
                    />
                  ) : (
                    <Narrator
                      {...item}
                      textMsg={item?.textContent}
                      imgMsg={item?.graphy}
                      soundMsg={item?.voice}
                      videoMsg={item?.video}
                      videoDirection={item?.videoFormat}
                      index={index}
                      onPressOption={onPressOption}
                    />
                  )}
                </>
              </Pressable>
            );
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 10 : 20,
    backgroundColor: colors.dark,
  },
});

export default StoryScreen;
