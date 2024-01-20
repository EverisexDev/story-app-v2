import React, { useRef } from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import ImageModal from './ImageModal';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function ChatImageArea({ imgMsg, backgroundColor }) {
  const imageUrl = domain + imgMsg;
  const modalRef = useRef(null)
  return (
    <>
      <Pressable
        onPress={() => {
          modalRef.current?.toggle()
        }}
      >
        <View style={[styles.container, backgroundColor]}>
          <Image
            fadeDuration={0}
            style={styles.img}
            source={{ uri: imageUrl }}
          />
        </View>
      </Pressable>
      <ImageModal ref={modalRef} imageUrl={imageUrl}/>
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
    width: 230,
    height: 200,
  },
});

export default ChatImageArea;
