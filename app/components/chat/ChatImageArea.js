import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import ImageModal from '../ImageModal';
const screenWidth = Dimensions.get('window').width;

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function ChatImageArea({ imgMsg, backgroundColor, imgSize }) {
  const imageUrl = domain + imgMsg;
  const modalRef = useRef(null);
  // const imgSize = useStore((state) => state.imgSize);
  // const setImgSize = useStore((state) => state.setImgSize);

  // useEffect(() => {
  //   Image.getSize(imageUrl, (width, height) => {
  //     let resizeRate =
  //       screenWidth > 500 ? (screenWidth * 0.6) / width : 256 / width;
  //     const newImage = {
  //       width: screenWidth > 500 ? screenWidth * 0.6 : 256,
  //       height: height * resizeRate,
  //     };
  //     setImgSize(newImage);
  //   });
  // }, [imageUrl]);

  return (
    <View style={[{ flex: 1 }]}>
      <Pressable
        onPress={() => {
          modalRef.current?.toggle();
        }}
      >
        <View style={[styles.container, backgroundColor]}>
          <Image
            fadeDuration={0}
            style={[styles.img, { height: 300, ...imgSize }]}
            source={{ uri: imageUrl }}
            resizeMode='contain'
          />
        </View>
      </Pressable>
      <ImageModal ref={modalRef} imageUrl={imageUrl} />
    </View>
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
