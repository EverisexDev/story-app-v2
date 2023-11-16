import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Asset } from "expo-asset";

import StoryContext from "../story/context";

function NarratorImage({ imgMsg }) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(Asset.fromModule(imgMsg));

  useEffect(() => {
    resizeImage();
  }, []);

  const screenWidth = Dimensions.get("window").width;

  const resizeImage = () => {
    const resizeRate = screenWidth / image.width;
    const newImage = {
      ...image,
      width: screenWidth,
      height: image.height * resizeRate,
    };
    setImage(newImage);
    setReady(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setCurrentChatIdx(currentChatIdx + 1);
      }}
    >
      <View style={styles.container}>
        {ready && (
          <Image
            style={{ width: image.width, height: image.height }}
            source={imgMsg}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NarratorImage;
