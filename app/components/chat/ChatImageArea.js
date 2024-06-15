import React, { useRef } from 'react';
import { View, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import ImageModal from '../ImageModal';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function ChatImageArea({ imgMsg, backgroundColor, imgSize }) {
  const imageUrl = domain + imgMsg;
  const modalRef = useRef(null);

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
