import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import colors from "../../config/colors";

function ChatVideoArea({ videoMsg }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    video.current.playAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoMsg}
        useNativeControls
        resizeMode="contain"
        // isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.dark,
  },
  video: {
    borderRadius: 15,
    width: 256,
    height: 144,
  },
});

export default ChatVideoArea;
