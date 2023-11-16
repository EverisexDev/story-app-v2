import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import AppText from "../AppText";

import colors from "../../config/colors";
import StoryContext from "../story/context";

function NarratorText({ textMsg, fontStyle }) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setCurrentChatIdx(currentChatIdx + 1);
      }}
    >
      <View style={styles.container}>
        {textMsg.map((content) => (
          <AppText key={content.id} style={[styles.text, fontStyle]}>
            {content.text}
          </AppText>
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    color: colors.white,
  },
});

export default NarratorText;
