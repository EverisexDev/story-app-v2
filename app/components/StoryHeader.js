import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";
import defaultStyle from "../config/styles";
import StoryContext from "./story/context";

function StoryHeader({ storyName, author }) {
  const { currentStory, currentBackIdx } = useContext(StoryContext);

  return (
    <View style={styles.container}>
      <AppText
        style={[
          defaultStyle.text,
          styles.text,
          { color: currentStory.default[currentBackIdx].nameColorL },
        ]}
      >
        {storyName}
      </AppText>
      <AppText
        style={[
          defaultStyle.text,
          styles.text,
          { color: currentStory.default[currentBackIdx].nameColorR },
        ]}
      >
        {author}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 15,
    // paddingVertical: 2,
    backgroundColor: colors.transparents,
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default StoryHeader;
