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
import routes from '../navigations/routes';
import Narrator from '../components/narrator/Narrator';
import StoryHeader from '../components/StoryHeader';
import Chat from '../components/chat/Chat';
import storage from '../storage/storage';
import { useRoute } from '@react-navigation/native';
import _ from 'lodash';
import useStore from '../store/story';
import { useIsFocused } from '@react-navigation/native';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';
const initStoryIdx = null;

function StoryScreen({ route, navigation }) {
  const router = useRoute();
  const isFocus = useIsFocused();
  const {
    storyId = 1,
    chapterId,
    author = '',
    name = '',
    storyData,
    nochapter = [],
    cachedIndex = null,
  } = router.params;
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
  const initRef = useRef(false);
  const cacheData = useMemo(
    () => ({
      storyId,
      chapterId,
      storyData,
      nochapter,
      cachedIndex: {
        story: index.story,
        screen: index.screen,
      },
    }),
    [queryInfo.screenings, index, router.params]
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
            setStory([]);
          }
        } else if (!_id && index.screen >= queryInfo.screenings.length) {
          storage.storeStory({ storyId, storyData, nochapter }, 'finishStory');
          storage.deleteStory({ storyId }, 'continueStory');
          navigation.navigate(routes.MAIN);
        }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };
    if (queryInfo.screenings) fetchStories();
  }, [index.screen, queryInfo.screenings]);

  useEffect(() => {
    if (!queryInfo?.content || index?.story === null) return;
    if (queryInfo?.content?.[index.story]?.contentPresent === '結尾') {
      setIndex((prev) => ({
        story: initStoryIdx,
        screen: prev.screen + 1,
      }));
    } else {
      if (initRef.current) {
        setStory(queryInfo?.content?.slice(0, index.story + 1));
        initRef.current = false;
      } else {
        setStory((prev) => [...prev, queryInfo?.content?.[index.story]]);
      }
    }
    return () => {
      if (queryInfo?.content[index.story]?.order !== '999999') {
        storage.storeStory(
          {
            ...cacheData,
            cachedIndex: {
              story: index.story,
              screen: index.screen,
            },
          },
          'continueStory'
        );
        storage.deleteStory({ storyId }, 'finishStory');
      } else {
        if (storyData?.chapter_type === '章節') {
          navigation.navigate(routes.CHAPTER);
        } else {
          storage.deleteStory({ storyId }, 'continueStory');
          storage.storeStory({ storyId, storyData, nochapter }, 'finishStory');
          navigation.navigate(routes.MAIN);
        }
      }
    };
  }, [index.story, queryInfo?.content, cachedIndex?.story]);

  useEffect(() => {
    if (flatlistRef.current && story.length) {
      setTimeout(() => {
        flatlistRef.current?.scrollToItem({
          item: story[index.story] ?? {},
          animated: true,
          viewPosition: 0,
        });
      }, 100);
    }
  }, [index.story, story]);

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

        // let allScreenings = {};
        // if (!screenings?.data.length) {
        //   allScreenings = await axios.get(
        //     `http://api.xstudio-mclub.url.tw/api/v1/admin/screenings/${storyId}`
        //   );
        // }
        const screenData = screenings?.data?.[cachedIndex?.screen ?? 0];

        // if (screenData) {
        // const content = await axios.get(
        //   `http://api.xstudio-mclub.url.tw/api/v1/admin/content/1/3/60`
        // );
        // const content = await axios.get(
        //   `http://api.xstudio-mclub.url.tw/api/v1/admin/content/${storyId}/${chapterId}/${screenData?.id}`
        // );
        // const storyContent = content?.data
        //   ?.slice()
        //   .sort((a, b) => a?.order - b?.order);

        setQueryInfo({
          config: config?.data[0] ?? {},
          screenings: screenings?.data ?? [], //allScreenings?.data,
          role: role?.data ?? {},
          // content: storyContent,
          imageUrl: domain + screenData?.bg_view,
          roleConf: roleConf?.data?.[0],
        });
        // }
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };
    if (cachedIndex) initRef.current = true;
    fetchData();
    setIndex({
      story: cachedIndex?.story ?? initStoryIdx,
      screen: cachedIndex?.screen ?? 0,
    });
  }, [isFocus]);
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
          onPress={_.debounce(() => onPressOption(null), 100)}
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
            onScrollToIndexFailed={({ index }) => {
              setTimeout(() => {
                flatlistRef.current?.scrollToItem({
                  item: story[index] ?? {},
                  animated: true,
                  viewPosition: 0.5,
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
