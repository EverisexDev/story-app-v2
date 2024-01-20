import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Pressable,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import axios from 'axios';
import colors from '../config/colors';

import Narrator from '../components/narrator/Narrator';
import StoryHeader from '../components/StoryHeader';
import Chat from '../components/chat/Chat';
import storage from '../storage/storage';
import { useRoute } from '@react-navigation/native';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function StoryScreen({ route, navigation }) {
  const routes = useRoute();

  const {
    storyId = 1,
    chapterId = 1,
    author = '',
    name = '',
    storyData = {},
    nochapter = [],
  } = routes.params;

  const [index, setIndex] = useState({
    story: 3,
    screen: null,
  });

  // const [maxY, setMaxY] = useState(0);
  // const [cuttentY, setCuttentY] = useState(0);
  const [queryInfo, setQueryInfo] = useState({
    config: [],
    screenings: {},
    content: [],
    role: {},
    imageUrl: '',
  });
  const flatlistRef = useRef(null);

  const onPressOption = (idx) => {
    let id = 0;
    queryInfo.content?.find((e, i) => {
      if (+e.order === +idx) {
        id = i;
      }
    });
    flatlistRef.current?.scrollToIndex({
      index: id,
      viewPosition: 0,
    });
  };

  useEffect(() => {
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
            flatlistRef.current?.scrollToIndex({
              index: 0,
              viewPosition: 0,
              animated: false,
            });

            let obj = {
              screenId: queryInfo.screenings?.[index.screen]?.id,
              storyId,
              chapterId,
              storyData,
              nochapter,
            };
            storage.storeStory(obj, 'continueStory');
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
    const fetchData = async () => {
      try {
        const config = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-list/${storyId}`
        );
        const screenings = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/screenings/${storyId}/${chapterId}`
        );
        const role = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/role`
        );
        const content = await axios.get(
          `http://api.xstudio-mclub.url.tw/api/v1/admin/content/${storyId}/${chapterId}/${screenings?.data?.[0].id}`
        );
        const storyContent = content?.data
          ?.slice()
          .sort((a, b) => a?.order - b?.order);

        setQueryInfo({
          config: config?.data ?? {},
          screenings: screenings?.data ?? {},
          role: role?.data ?? {},
          content: storyContent,
          imageUrl: domain + screenings?.data?.[0]?.bg_view,
        });
        setIndex((prev) => ({
          ...prev,
          screen: 0,
        }));
      } catch (error) {
        console.error('API 請求失敗：', error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   // console.log(currentBackIdx, currentChatIdx);

  //   // 如果背景存在，代表故事尚未結束
  //   if (currentStory.default[currentBackIdx]) {
  //     let chats = currentStory.default[currentBackIdx].chats;
  //     console.log("現在背景", currentBackIdx);
  //     console.log("現在對話", currentChatIdx);
  //     console.log("現在對話長度", chats.length);

  //     // 如果 chats[idx]存在，代表還有對話，且，idx < chats.length，代表故事還沒走完
  //     // 就要 setStoryChatArr
  //     if (chats[currentChatIdx] && currentChatIdx <= chats.length) {
  //       // 篩選出這個背景的對話中，所有在currentChatIdx之前的對話
  //       let chatsBeforeCurrentChatIdx = chats.filter(
  //         (c) => c.chatSN <= currentChatIdx + 1
  //       );
  //       setStoryChatArr(chatsBeforeCurrentChatIdx);
  //     } else {
  //       // console.log("current", cuttentY, "max", maxY);
  //       if (currentChatIdx >= chats.length && cuttentY >= maxY) {
  //         console.log("下一頁");
  //         setStoryChatArr([]);
  //         setCurrentChatIdx(-1);
  //         setCurrentBackIdx(currentBackIdx + 1);
  //         setMaxY(0);
  //         setCuttentY(0);
  //       }
  //       console.log("場景結束");
  //     }
  //     // 把現在看的這個故事的狀況儲存起來
  //     let obj = {
  //       ...storyDetail,
  //       backSN: currentBackIdx,
  //       chatSN: currentChatIdx,
  //       story: currentStory,
  //     };
  //     storage.storeStory(obj, "continueStory");

  //     setTimeout(() => {
  //       try {
  //         flatlistRef.current.scrollToEnd({
  //           animating: true,
  //         });
  //       } catch {}
  //     }, 200);
  //   }
  // }, [currentChatIdx]);

  // 安著的 onMomentumScrollEnd不會在自動滾的時候設定數值
  // const endScroll = (e) => {
  //   // console.log("end", e.nativeEvent.contentOffset.y);
  //   if (maxY < e.nativeEvent.contentOffset.y) {
  //     setMaxY(e.nativeEvent.contentOffset.y);
  //   }
  // };

  // 哀鳳的滑動可以滑超過最大值，導致current<maxY
  // const onScroll = (e) => {
  //   console.log('現在Ｙ', e.nativeEvent.contentOffset.y);
  //   console.log('最大Ｙ', maxY);
  //   setCuttentY(e.nativeEvent.contentOffset.y);
  //   if (maxY < e.nativeEvent.contentOffset.y) {
  //     console.log('超過最大值');
  //     setMaxY(e.nativeEvent.contentOffset.y);
  //   }
  // };

  return (
    <ImageBackground
      fadeDuration={2000}
      style={styles.container}
      resizeMode='cover'
      source={{
        uri: queryInfo?.imageUrl ?? domain,
      }}
    >
      <StoryHeader
        storyName={name}
        author={author}
        config={queryInfo?.config}
      />
      <FlatList
        data={queryInfo.content ?? [0]}
        ref={flatlistRef}
        keyExtractor={(item) => item?.id?.toString()}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                setIndex((prev) => ({
                  ...prev,
                  screen: prev.screen + 1,
                }));
              }}
            >
              {item?.contentPresent === '對話' ? (
                <Chat
                  {...item}
                  textMsg={item?.textContent}
                  imgMsg={item?.graphy}
                  soundMsg={item?.voice}
                  videoMsg={item?.video}
                  role={queryInfo?.role}
                  index={index}
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
            </Pressable>
          );
        }}
      />
    </ImageBackground>
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
