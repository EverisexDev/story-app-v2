import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../../config/colors";
import StoryContext from "../story/context";
import ChatImageArea from "./ChatImageArea";
import ChatSoundArea from "./ChatSoundArea";

import ChatTextArea from "./ChatTextArea";
import ChatVideoArea from "./ChatVideoArea";
import PersonalPhoto from "./PersonalPhoto";

function Chat({
  photo,
  name,
  textMsg,
  soundMsg,
  imgMsg,
  videoMsg,
  direction,
  leftBackColor,
}) {
  const { currentStory, currentBackIdx, currentChatIdx, setCurrentChatIdx } =
    useContext(StoryContext);

  const LeftOrRight = () => {
    if (direction === "L") {
      return (
        <View style={styles.chatLeft}>
          <PersonalPhoto
            photo={photo}
            name={name}
            nameColor={currentStory.default[currentBackIdx].nameColorL}
          />
          {textMsg && (
            <ChatTextArea
              textMsg={textMsg}
              backgroundColor={
                leftBackColor
                  ? { backgroundColor: leftBackColor }
                  : styles.leftBackground
              }
              // chatIdx={chatIdx}
              // setChatIdx={setChatIdx}
            />
          )}
          {soundMsg && (
            <ChatSoundArea
              soundMsg={soundMsg}
              backgroundColor={
                leftBackColor
                  ? { backgroundColor: leftBackColor }
                  : styles.leftBackground
              }
            />
          )}
          {imgMsg && (
            <ChatImageArea
              imgMsg={imgMsg}
              backgroundColor={styles.imgBackground}
            />
          )}
          {videoMsg && <ChatVideoArea videoMsg={videoMsg} />}
        </View>
      );
    } else {
      return (
        <View style={styles.chatRight}>
          {textMsg && (
            <ChatTextArea
              textMsg={textMsg}
              backgroundColor={styles.rightBackground}
              // chatIdx={chatIdx}
              // setChatIdx={setChatIdx}
            />
          )}
          {soundMsg && (
            <ChatSoundArea
              soundMsg={soundMsg}
              backgroundColor={styles.rightBackground}
            />
          )}
          {imgMsg && (
            <ChatImageArea
              imgMsg={imgMsg}
              backgroundColor={styles.imgBackground}
            />
          )}
          {videoMsg && <ChatVideoArea videoMsg={videoMsg} />}
          <PersonalPhoto
            photo={photo}
            name={name}
            nameColor={currentStory.default[currentBackIdx].nameColorR}
          />
        </View>
      );
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!videoMsg) {
          setCurrentChatIdx(currentChatIdx + 1);
        }
      }}
    >
      {LeftOrRight()}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  chatLeft: {
    flexDirection: "row",
    paddingVertical: 5,
    // backgroundColor: colors.danger,
  },
  chatRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingVertical: 5,
    // backgroundColor: colors.danger,
  },
  leftBackground: {
    backgroundColor: colors.leftChatBackground,
  },
  rightBackground: {
    backgroundColor: colors.rightChatBackground,
  },
  imgBackground: {
    backgroundColor: colors.imgChatBackground,
  },
});

export default Chat;
