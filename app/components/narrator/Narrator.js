import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../../config/colors";

import NarratorText from "./NarratorText";
import NarratorSound from "./NarratorSound";
import NarratorImage from "./NarratorImage";
import NarratorVideo from "./NarratorVideo";

import StoryContext from "../story/context";

function Narrator({
  textMsg,
  imgMsg,
  soundMsg,
  soundImg,
  videoMsg,
  videoDirection,
  backStyle,
  fontStyle,
}) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!videoMsg) {
          setCurrentChatIdx(currentChatIdx + 1);
        }
      }}
    >
      <View style={styles.container}>
        <View style={[styles.contentContainer, backStyle]}>
          {textMsg && (
            <NarratorText
              textMsg={textMsg}
              fontStyle={fontStyle}
              // chatIdx={chatIdx}
              // setChatIdx={setChatIdx}
            />
          )}
          {imgMsg && (
            <NarratorImage
              imgMsg={imgMsg}
              // chatIdx={chatIdx}
              // setChatIdx={setChatIdx}
            />
          )}
          {soundMsg && (
            <NarratorSound soundMsg={soundMsg} soundImg={soundImg} />
          )}
          {videoMsg && (
            <NarratorVideo
              videoMsg={videoMsg}
              videoDirection={videoDirection}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.danger,
    marginVertical: 3,
  },
  contentContainer: {
    alignSelf: "center",
    padding: 5,
    // marginTop: 5,
    // marginBottom: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.transparents,
    borderRadius: 30,
  },
});

export default Narrator;
