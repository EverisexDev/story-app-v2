import React, { useContext, useMemo } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import NarratorSound from './NarratorSound';
import NarratorVideo from './NarratorVideo';
import NarratorOption from './NarratorOption';

function Narrator(props) {
  const {
    textMsg,
    imgMsg,
    soundMsg,
    videoMsg,
    videoDirection,
    choice1Content = '',
    onPressOption,
    textContentColor,
    textContentWeight,
    textContentSize,
    textContentBaseColor,
  } = props;

  const imgUrl = useMemo(
    () => 'http://api.xstudio-mclub.url.tw/images/update/' + imgMsg,
    [imgMsg]
  );

  return (
    <View style={[styles.contentContainer]}>
      {textMsg ? (
        <View
          style={{
            backgroundColor: textContentBaseColor,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <AppText
            style={{
              textAlign: 'center',
              fontSize: textContentSize || 20,
              color: textContentColor || '#fff',
              ...(textContentWeight === '粗' && {
                fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
              }),
            }}
          >
            {textMsg}
          </AppText>
        </View>
      ) : null}
      {imgMsg ? (
        <Image style={{ width: 100 }} source={{ uri: imgUrl }} />
      ) : null}
      {soundMsg ? <NarratorSound soundMsg={soundMsg} /> : null}
      {videoMsg ? (
        <NarratorVideo videoMsg={videoMsg} videoDirection={videoDirection} />
      ) : null}
      {choice1Content ? (
        <NarratorOption {...props} onPressOption={onPressOption} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: colors.transparent,
    marginVertical: 3,
  },
});

export default Narrator;
