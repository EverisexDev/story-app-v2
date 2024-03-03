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
        style={{
          width: size?.width,
          height: size?.height,
        }}
      >
        <View
          style={[
            styles.container,
            backgroundColor,
            { width: size?.width, height: size?.height },
          ]}
        >
          <Image
            fadeDuration={0}
            style={[styles.img, { width: size?.width, height: size?.height }]}
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

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Image,
//   Dimensions,
// } from "react-native";
// import { Asset } from "expo-asset";
// import { useNavigation } from "@react-navigation/native";

// import routes from "../../navigations/routes";

// function ChatImageArea({ imgMsg, backgroundColor }) {
//   const navigation = useNavigation();
//   const [ready, setReady] = useState(false);
//   const [image, setImage] = useState(Asset.fromModule(imgMsg));
//   const [imageForNavigate, setImageForNavigate] = useState(
//     Asset.fromModule(imgMsg)
//   );

//   const screenWidth = Dimensions.get("window").width;
//   const screenHeight = Dimensions.get("window").height;

//   // console.log(screenWidth, screenHeight, "---------------");

//   useEffect(() => {
//     resizeImage();
//     resizePhotoForNavigate();
//   }, []);

//   const resizePhotoForNavigate = () => {
//     const resizeRate = screenWidth / imageForNavigate.width;
//     const newImageForNavigate = {
//       ...imageForNavigate,
//       width: screenWidth,
//       height: imageForNavigate.height * resizeRate,
//     };
//     setImageForNavigate(newImageForNavigate);
//   };

//   const resizeImage = () => {
//     let resizeRate =
//       screenWidth > 500 ? (screenWidth * 0.6) / width : 256 / width;
//     const newImage = {
//       ...image,
//       width: screenWidth > 500 ? screenWidth * 0.6 : 256,
//       height: height * resizeRate,
//     };
//     setImage(newImage);
//     setReady(true);
//   };

//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         navigation.navigate(routes.IMAGE, imageForNavigate);
//       }}
//     >
//       <View style={[styles.container, backgroundColor]}>
//         {ready && <Image fadeDuration={0} style={styles.img} source={image} />}
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignSelf: "flex-start",
//     borderRadius: 15,
//   },
//   img: {
//     borderRadius: 15,
//   },
// });

// export default ChatImageArea;
