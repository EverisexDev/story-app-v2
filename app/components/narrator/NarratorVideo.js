import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Video } from "expo-av";
import colors from "../../config/colors";
import StoryContext from "../story/context";

function NarratorVideo({ videoMsg, videoDirection }) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const screenWidth = Dimensions.get("window").width;

  const videoStyle =
    videoDirection === "row"
      ? { width: screenWidth, height: screenWidth * (9 / 16) }
      : { width: screenWidth, height: screenWidth * (16 / 9) };

  useEffect(() => {
    video.current.playAsync();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setCurrentChatIdx(currentChatIdx + 1);
      }}
    >
      <View style={styles.container}>
        <Video
          ref={video}
          style={videoStyle}
          source={videoMsg}
          resizeMode="contain"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
  },
  text: {
    color: colors.light,
  },
});

export default NarratorVideo;
