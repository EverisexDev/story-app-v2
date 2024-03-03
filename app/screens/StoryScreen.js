import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import axios from 'axios';
import colors from '../config/colors';

import Narrator from '../components/narrator/Narrator';
import StoryHeader from '../components/StoryHeader';
import Chat from '../components/chat/Chat';
import storage from '../storage/storage';
import { useRoute } from '@react-navigation/native';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';
const initStoryIdx = null;

function StoryScreen({ route, navigation }) {
  const routes = useRoute();

  const {
    storyId = 1,
    chapterId = 1,
    author = '',
    name = '',
    storyData = {},
    nochapter = [],
    cachedIndex,
  } = routes.params;

  const [index, setIndex] = useState({
    story: initStoryIdx,
    screen: 0,
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
  const choseRef = useRef(false);

  const cacheData = useMemo(
    () => ({
      // screenId: queryInfo.screenings?.[index.screen]?.id,
      storyId,
      chapterId,
      storyData,
      nochapter,
      cachedIndex: index,
    }),
    [queryInfo.screenings, index]
  );
  const onPressOption = (idx) => {
    if (idx) {
      if (choseRef.current) {
        return;
      } else {
        let id = 0;
        queryInfo.content?.find((e, i) => {
          if (+e.order === +idx) {
            id = i;
          }
        });
        // if(index.story > id)
        setIndex((prev) => ({
          ...prev,
          story: id,
        }));
        choseRef.current = true;
      }
    } else {
      setIndex((prev) => ({
        ...prev,
        story: index.story === null ? 0 : index.story + 1,
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
          if (content?.data?.length) {
            const storyContent = content?.data
              ?.slice()
              .sort((a, b) => a?.order - b?.order);

            setQueryInfo((prev) => ({
              ...prev,
              content: storyContent,
              imageUrl: domain + queryInfo?.screenings?.[index.screen]?.bg_view,
            }));
          }
        }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };

    fetchStories();
  }, [index.screen]);

  useEffect(() => {
    if (!queryInfo?.content || index?.story === null) return;
    if (queryInfo?.content[index.story]?.contentPresent === '結尾') {
      setIndex((prev) => ({
        story: initStoryIdx,
        screen: prev.screen + 1,
      }));
      setStory([]);
    } else if (index?.story === cachedIndex?.story) {
      setStory(queryInfo?.content?.slice(0, cachedIndex?.story + 1));
    } else {
      setStory((prev) => [...prev, queryInfo?.content?.[index.story]]);
    }
    return () => {
      if (queryInfo.screenings?.[cachedIndex?.screen ?? index.screen]?.id) {
        storage.storeStory(cacheData, 'continueStory');
      } else {
        // 故事結束，儲存到再次回味畫面
        storage.storeStory({ storyId, storyData, nochapter }, 'finishStory');

        //故事結束，刪除繼續觀賞畫面
        storage.deleteStory({ storyId }, 'continueStory');
        // navigation.goBack();
      }
    };
  }, [index.story, queryInfo?.content]);

  useEffect(() => {
    if (!story?.length) return;
    flatlistRef.current.scrollToIndex({
      index: story.length - 1,
      animated: true,
      viewPosition: 1,
    });
  }, [story]);

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

        const screenId = cachedIndex?.screen
          ? screenings?.data?.[cachedIndex?.screen]?.id
          : null;

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
            imageUrl:
              domain + screenings?.data?.[cachedIndex?.screen ?? 0]?.bg_view,
            roleConf: roleConf?.data?.[0],
          });
        }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };

    fetchData();
    if (cachedIndex) {
      setIndex({
        story: cachedIndex?.story ?? null,
        screen: cachedIndex?.screen ?? 0,
      });
    }
  }, [cachedIndex]);

  return (
    <ImageBackground
      fadeDuration={2000}
      style={[styles.container]}
      resizeMode='cover'
      source={
        queryInfo?.imageUrl
          ? {
              uri: queryInfo?.imageUrl,
            }
          : null
      }
    >
      <SafeAreaView style={{ flex: 1, position: 'relative' }}>
        <StoryHeader
          storyName={name}
          author={author}
          config={queryInfo?.config}
        />
        <Pressable
          onPress={() => onPressOption(null)}
          style={{
            flex: 1,
          }}
        >
          <FlatList
            data={story}
            ref={flatlistRef}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            onScrollToIndexFailed={({ index, averageItemLength }) => {
              setTimeout(() => {
                flatlistRef.current?.scrollToIndex({
                  index,
                  animated: true,
                });
              }, 0);
            }}
            renderItem={({ item, index }) => {
              return (
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
                      // onPressOption={onPressOption}
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
                      choseRef={choseRef}
                    />
                  )}
                </>
              );
            }}
          />
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 10 : 20,
    paddingBottom: 20,
    backgroundColor: colors.dark,
  },
});

export default StoryScreen;
