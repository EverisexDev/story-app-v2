import React, { useMemo, useRef } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import NarratorSound from './NarratorSound';
import NarratorVideo from './NarratorVideo';
import NarratorOption from './NarratorOption';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
    choseRef,
  } = props;
  const modalRef = useRef(null);

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
        <Image
          style={{ width: wp('100%'), height: 200 }}
          source={{ uri: imgUrl }}
        />
      ) : null}
      {soundMsg ? <NarratorSound soundMsg={soundMsg} /> : null}
      {videoMsg ? (
        <NarratorVideo videoMsg={videoMsg} videoDirection={videoDirection} />
      ) : null}
      {choice1Content ? (
        <NarratorOption
          {...props}
          onPressOption={onPressOption}
          choseRef={choseRef}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: colors.transparent,
    marginVertical: 3,
    flex: 1,
  },
});

export default React.memo(Narrator);
