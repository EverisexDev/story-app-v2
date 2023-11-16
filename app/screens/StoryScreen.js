import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, FlatList } from "react-native";

import Narrator from "../components/narrator/Narrator";
import StoryHeader from "../components/StoryHeader";
import ImageBackScreen from "./ImageBackScreen";
import Chat from "../components/chat/Chat";

import StoryContext from "../components/story/context";
import storage from "../storage/storage";

function StoryScreen({ route, navigation }) {
  const storyDetail = route.params;
  const {
    currentStory,
    currentChatIdx,
    currentBackIdx,
    setCurrentBackIdx,
    setCurrentChatIdx,
  } = useContext(StoryContext);

  const [storyChatArr, setStoryChatArr] = useState([]);
  const [maxY, setMaxY] = useState(0);
  const [cuttentY, setCuttentY] = useState(0);

  const flatlistRef = useRef(null);

  useEffect(() => {
    if (!currentStory.default[currentBackIdx]) {
      let obj = {
        ...storyDetail,
        backSN: currentBackIdx,
        chatSN: currentChatIdx,
        story: currentStory,
      };
      // 故事結束，儲存到再次回味畫面
      storage.storeStory(obj, "finishStory");

      //故事結束，刪除繼續觀賞畫面
      storage.deleteStory(obj, "continueStory");
      navigation.goBack();
    }
  }, [currentBackIdx]);

  useEffect(() => {
    // console.log(currentBackIdx, currentChatIdx);

    // 如果背景存在，代表故事尚未結束
    if (currentStory.default[currentBackIdx]) {
      let chats = currentStory.default[currentBackIdx].chats;
      console.log("現在背景", currentBackIdx);
      console.log("現在對話", currentChatIdx);
      console.log("現在對話長度", chats.length);

      // 如果 chats[idx]存在，代表還有對話，且，idx < chats.length，代表故事還沒走完
      // 就要 setStoryChatArr
      if (chats[currentChatIdx] && currentChatIdx <= chats.length) {
        // 篩選出這個背景的對話中，所有在currentChatIdx之前的對話
        let chatsBeforeCurrentChatIdx = chats.filter(
          (c) => c.chatSN <= currentChatIdx + 1
        );
        setStoryChatArr(chatsBeforeCurrentChatIdx);
      } else {
        // console.log("current", cuttentY, "max", maxY);
        if (currentChatIdx >= chats.length && cuttentY >= maxY) {
          console.log("下一頁");
          setStoryChatArr([]);
          setCurrentChatIdx(-1);
          setCurrentBackIdx(currentBackIdx + 1);
          setMaxY(0);
          setCuttentY(0);
        }
        console.log("場景結束");
      }
      // 把現在看的這個故事的狀況儲存起來
      let obj = {
        ...storyDetail,
        backSN: currentBackIdx,
        chatSN: currentChatIdx,
        story: currentStory,
      };
      storage.storeStory(obj, "continueStory");

      setTimeout(() => {
        try {
          flatlistRef.current.scrollToEnd({
            animating: true,
          });
        } catch {}
      }, 200);
    }
  }, [currentChatIdx]);

  // 安著的 onMomentumScrollEnd不會在自動滾的時候設定數值
  const endScroll = (e) => {
    // console.log("end", e.nativeEvent.contentOffset.y);
    if (maxY < e.nativeEvent.contentOffset.y) {
      setMaxY(e.nativeEvent.contentOffset.y);
    }
  };

  // 哀鳳的滑動可以滑超過最大值，導致current<maxY
  const onScroll = (e) => {
    console.log("現在Ｙ", e.nativeEvent.contentOffset.y);
    console.log("最大Ｙ", maxY);
    setCuttentY(e.nativeEvent.contentOffset.y);
    if (maxY < e.nativeEvent.contentOffset.y) {
      console.log("超過最大值");
      setMaxY(e.nativeEvent.contentOffset.y);
    }
  };

  return (
    <>
      {currentStory.default[currentBackIdx] && (
        <ImageBackScreen img={currentStory.default[currentBackIdx].backImg}>
          <StoryHeader
            storyName={storyDetail.name}
            author={storyDetail.author}
          />
          <FlatList
            data={storyChatArr}
            ref={flatlistRef}
            keyExtractor={(item) => item.chatSN.toString()}
            onMomentumScrollEnd={onScroll}
            renderItem={({ item }) => {
              return item.type === "P" ? (
                <Chat
                  photo={item.photo}
                  name={item.name}
                  textMsg={item.text}
                  imgMsg={item.img}
                  soundMsg={item.sound}
                  videoMsg={item.video}
                  direction={item.speaker}
                  leftBackColor={item.backColor}
                />
              ) : (
                <Narrator
                  textMsg={item.text}
                  imgMsg={item.img}
                  soundMsg={item.sound}
                  soundImg={item.soundImg}
                  videoMsg={item.video}
                  videoDirection={item.videoDirection}
                  backStyle={item.backStyle}
                  fontStyle={item.fontStyle}
                />
              );
            }}
          />
        </ImageBackScreen>
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default StoryScreen;
