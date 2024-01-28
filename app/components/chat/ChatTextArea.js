import React, { useContext } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import AppText from '../AppText';
import defaultStyle from '../../config/styles';
import StoryContext from '../story/context';

function ChatTextArea({ textMsg, backgroundColor, textStyle }) {
  const notChinese = /[0-9a-z]/i;
  let points = 0;

  for (let idx in textMsg) {
    // 如果這個字元他不是中文 或 是空格 或 是點 或 是逗號，分數+0.5
    if (
      notChinese.test(textMsg[idx]) ||
      textMsg[idx] === ' ' ||
      textMsg[idx] === '.' ||
      textMsg[idx] === ','
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
    <View
      style={[
        styles.container,
        {
          width: points >= 26 ? 220 : undefined,
        },
        backgroundColor,
      ]}
    >
      <AppText style={[defaultStyle.text, styles.text, textStyle]}>
        {textMsg}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontWeight: '400',
    fontSize: 15,
  },
});

export default ChatTextArea;
