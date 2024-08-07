import React, { useRef } from 'react';
import { View, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import ImageModal from '../ImageModal';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigations/routes';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function ChatImageArea({ imgMsg, backgroundColor, imgSize }) {
  const imageUrl = domain + imgMsg;
  const modalRef = useRef(null);
  const navigation = useNavigation();
  return (
    <View style={[{ flex: 1 }]}>
      <Pressable
        onPress={() => {
          navigation.navigate(routes.IMAGE, {
            img: imageUrl,
          });
          // modalRef.current?.toggle();
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
