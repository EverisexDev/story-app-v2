import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import ImageModal from '../ImageModal';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function ChatImageArea({ imgMsg, backgroundColor }) {
  const imageUrl = domain + imgMsg;
  const modalRef = useRef(null);
  const [size, setSize] = useState({});

  useEffect(() => {
    Image.getSize(imageUrl, (width, height) => {
      let resizeRate =
        screenWidth > 500 ? (screenWidth * 0.6) / width : 256 / width;
      const newImage = {
        width: screenWidth > 500 ? screenWidth * 0.6 : 256,
        height: height * resizeRate,
      };
      setSize(newImage);
    });
  }, [imageUrl]);

  return (
    <>
      <Pressable
        onPress={() => {
          modalRef.current?.toggle();
        }}
      >
        <View
          style={[
            styles.container,
            backgroundColor,
            size
          ]}
        >
          <Image
            fadeDuration={0}
            style={[styles.img, size]}
            source={{ uri: imageUrl }}
            resizeMode='contain'
          />
        </View>
      </Pressable>
      <ImageModal ref={modalRef} imageUrl={imageUrl} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 15,
  },
  img: {
    borderRadius: 15,
  },
});

export default React.memo(ChatImageArea);