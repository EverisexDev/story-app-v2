import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform
} from "react-native";

import StoryContext from "../components/story/context";
import colors from "../config/colors";

function ImageBackScreen({ children, img }) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);
  return (
    <ImageBackground
      fadeDuration={2000}
      style={styles.container}
      resizeMode="cover"
      source={img}
    >
      <StatusBar style="auto" hidden={true} />
      <TouchableWithoutFeedback
        style={styles.contentContainer}
        onPress={() => {
          setCurrentChatIdx(currentChatIdx + 1);
        }}
      >
        <View style={styles.contentContainer}>{children}</View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 35,
    backgroundColor: colors.dark,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ImageBackScreen;
