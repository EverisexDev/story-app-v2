import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Asset } from "expo-asset";

import StoryContext from "../story/context";
import routes from "../../navigations/routes";
import AppText from "../AppText";
import colors from "../../config/colors";

function Book({
  name,
  author,
  cover,
  story,
  cont = null,
  backSN = 0,
  chatSN = -1,
}) {
  const navigation = useNavigation();
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(Asset.fromModule(cover));
  const { setCurrentStory, setCurrentBackIdx, setCurrentChatIdx } =
    useContext(StoryContext);

  const screenWidth = Dimensions.get("window").width;

  const padImgStyle = screenWidth > 500 ? { width: 225, height: 330 } : {};

  useEffect(() => {
    // screenWidth > 500 ? resizeImage() : setReady(true);
    resizeImage();
  }, []);

  const resizeImage = () => {
    let resizeRate =
      screenWidth > 500 ? (screenWidth * 0.6) / image.width : 256 / image.width;
    const newImage = {
      ...image,
      width: screenWidth > 500 ? screenWidth * 0.6 : 256,
      height: image.height * resizeRate,
    };
    setImage(newImage);
    setReady(true);
  };

  const goToStory = () => {
    // 如果有故事內容，才要跳轉頁面
    if (story) {
      setCurrentStory(story);
      setCurrentBackIdx(backSN);
      setCurrentChatIdx(chatSN);
      navigation.navigate(routes.STORY, {
        name: name,
        author: author,
        cover: cover,
      });
    }
  };

  // Object {
  //   "default": Array [
  //     Object {
  //       "backImg": 20,
  //       "backSN": 1,
  //       "chats": Array [

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // 如果是主畫面
          if (cont === null) {
            // 如果這本故事有繼續觀看
            if (story) {
              Alert.alert(
                "故事將從頭開始",
                "請選擇前往繼續觀看頁面，或從頭開始閱讀",
                [
                  {
                    text: "從頭開始",
                    onPress: () => goToStory(),
                  },
                  {
                    text: "繼續觀看",
                    onPress: () => navigation.navigate(routes.CONTINUE),
                  },
                ],
                {
                  cancelable: true,
                }
              );
            }
          } else {
            // 如果不是主畫面就直接進去故事
            goToStory();
          }
        }}
      >
        {ready && (
          <>
            {cont === true ? (
              // 繼續觀看
              <View>
                <Image
                  style={styles.coverIcon}
                  source={require("../../../assets/continue.png")}
                />
                <Image style={[styles.img, padImgStyle]} source={image} />
              </View>
            ) : cont === false ? (
              // 重新回味
              <View>
                <Image
                  style={styles.coverIcon}
                  source={require("../../../assets/reload.png")}
                />
                <Image style={[styles.img, padImgStyle]} source={image} />
              </View>
            ) : (
              // 一般畫面
              <View>
                <Image style={[styles.img, padImgStyle]} source={image} />
              </View>
            )}
            <View style={styles.nameContainer}>
              <AppText style={styles.name}>{name}</AppText>
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  nameContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    color: colors.leftChatBackground,
  },
  img: {
    width: 150,
    height: 220,
  },
  coverIcon: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 55,
    marginTop: 95,
    // color: colors.light,
  },
});

export default Book;
