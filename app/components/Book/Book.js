import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import StoryContext from '../story/context';
import routes from '../../navigations/routes';
import AppText from '../AppText';
import colors from '../../config/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const screenWidth = Dimensions.get('window').width;

function Book({
  main_menu_name: name,
  main_menu_font_size = '',
  main_menu_color = '',
  main_menu_image = '',
  main_menu_weight = '',
  main_menu_btn_left,
  main_menu_btn_right,
  main_menu_content = '',
  main_menu_title = '',
  noChapter = null,
  storyStatus = '',
  author = '',
  backSN = 0,
  chatSN = -1,
}) {
  const navigation = useNavigation();
  const [ready, setReady] = useState(false);
  const isReadFree = noChapter?.read_free === '開放' ?? false;
  const img = require('../../../assets/story/cover/C1-1.jpg');

  const imageUri = 'http://api.xstudio-mclub.url.tw/' + main_menu_image;
  const [image, setImage] = useState(Asset.fromModule(img ?? imageUri));
  const { setCurrentStory, setCurrentBackIdx, setCurrentChatIdx } =
    useContext(StoryContext);

  const padImgStyle = screenWidth > 500 ? { width: 225, height: 330 } : {};

  useEffect(() => {
    // screenWidth > 500 ? resizeImage() : setReady(true);
    resizeImage();
  }, []);

  const resizeImage = () => {
    const resizeRate =
      screenWidth > 500 ? (screenWidth * 0.6) / image.width : 256 / image.width;
    const newImage = {
      ...image,
      width: screenWidth > 500 ? screenWidth * 0.6 : 256,
      height: image.height * resizeRate,
    };
    setImage(newImage);
    setReady(true);
  };

  const storyPayload =  {
    name,
    cover: main_menu_image,
    author,
    // storyId: storyid,
    // chapterId: id,
  }

  const goToStory = () => {
    // 如果有故事內容，才要跳轉頁面
    if (storyStatus?.continueStory) {
      // setCurrentStory(story);
      // setCurrentBackIdx(backSN);
      // setCurrentChatIdx(chatSN);
      navigation.navigate(routes.STORY, storyPayload);
    } else
      navigation.navigate(routes.STORY,storyPayload);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.container}
        onPress={() => {
          if (noChapter) {
            if (isReadFree)
              Alert.alert(
                main_menu_title,
                main_menu_content,
                [
                  {
                    text: main_menu_btn_left ?? '繼續閱讀',
                    onPress: goToStory,
                  },
                  {
                    text: main_menu_btn_right ?? '重新再來',
                    onPress: () =>
                      navigation.navigate(routes.STORY, storyPayload),
                  },
                ],
                {
                  cancelable: true,
                }
              );
            else return;
          } else {
            navigation.navigate(routes.CHAPTER, { name, author });
          }
        }}
      >
        {ready && (
          <>
            {storyStatus?.continueStory ? (
              // 繼續觀看
              <View>
                <Image
                  style={styles.coverIcon}
                  source={require('../../../assets/continue.png')}
                />
                <Image
                  style={[styles.img, padImgStyle]}
                  source={image}
                  // source={{
                  //   uri: imageUri,
                  // }}
                />
              </View>
            ) : storyStatus?.finishStory ? (
              // 重新回味
              <View>
                <Image
                  style={styles.coverIcon}
                  source={require('../../../assets/reload.png')}
                />
                <Image
                  style={[styles.img, padImgStyle]}
                  // source={image}

                  source={{ uri: imageUri }}
                />
              </View>
            ) : (
              // 一般畫面
              <View>
                {!isReadFree && noChapter ? (
                  <View style={styles.lock}>
                    <Image
                      style={styles.lockIcon}
                      source={require('../../../assets/lock.png')}
                    />
                  </View>
                ) : null}
                <Image
                  style={[styles.img, padImgStyle]}
                  // source={{ uri: imageUri }}
                  source={image}
                />
              </View>
            )}
            <View style={styles.nameContainer}>
              <AppText
                style={[
                  styles.name,
                  {
                    fontSize: 15 ?? +main_menu_font_size,
                    color: main_menu_color ?? '',
                    fontWeight: main_menu_weight === '粗' ? 'bold' : 'normal',
                  },
                ]}
              >
                {name}
              </AppText>
            </View>
          </>
        )}
      </Pressable>
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
    alignItems: 'center',
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
    position: 'absolute',
    zIndex: 1,
    marginLeft: 55,
    marginTop: 95,
  },
  lockIcon: {
    width: 20,
    height: 20,
  },
  lock: {
    position: 'absolute',
    zIndex: 1,
    top: wp('22%'),
    left: wp('15%'),
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Book;
