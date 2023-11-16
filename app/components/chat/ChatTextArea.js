import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import AppText from "../AppText";
import defaultStyle from "../../config/styles";
import StoryContext from "../story/context";

function ChatTextArea({ textMsg, backgroundColor }) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);
  const notChinese = /[0-9a-z]/i;
  let points = 0;

  for (let idx in textMsg) {
    // 如果這個字元他不是中文 或 是空格 或 是點 或 是逗號，分數+0.5
    if (
      notChinese.test(textMsg[idx]) ||
      textMsg[idx] === " " ||
      textMsg[idx] === "." ||
      textMsg[idx] === ","
    ) {
      points += 1;
    } else {
      points += 2;
    }

    // 如果分數已經大於22 那就不用再繼續算了
    if (points >= 26) {
      break;
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setCurrentChatIdx(currentChatIdx + 1);
      }}
    >
      <View
        style={[
          styles.container,
          backgroundColor,
          { width: points >= 26 ? 220 : undefined },
        ]}
      >
        <AppText style={[defaultStyle.text, styles.text]}>{textMsg}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
  },
});

export default ChatTextArea;
