import React, { useEffect, useRef, useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import colors from '../../config/colors';

const screenWidth = Dimensions.get('window').width;

function NarratorVideo({ videoMsg, videoDirection }) {
  const video = useRef(null);

  const videoUrl = 'http://api.xstudio-mclub.url.tw/images/update/' + videoMsg;

  const videoStyle = useMemo(
    () =>
      videoDirection === '橫'
        ? { width: screenWidth, height: screenWidth * (9 / 16) }
        : { width: screenWidth, height: screenWidth * (16 / 9) },
    [videoDirection]
  );
  useEffect(() => {
    video.current?.playAsync();
  }, [videoMsg]);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={videoStyle}
        source={{ uri: videoUrl }}
        resizeMode='contain'
        // shouldPlay={false}
        // isLooping
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
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

export default React.memo(NarratorVideo);
