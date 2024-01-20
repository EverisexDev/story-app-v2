import React, { useMemo, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  Alert,
  Platform,
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

function Book(props) {
  const { storyData = {}, storyCache = {}, nochapter, view_color=''} = props;
  const {
    main_menu_name,
    main_menu_font_size = '',
    main_menu_color = '',
    main_menu_image = '',
    main_menu_weight = '',
    main_menu_btn_left,
    main_menu_btn_right,
    main_menu_content = '',
    main_menu_title = '',
    open = '',
    chapter_type = '',
    author = '',
    id = 1,
    lang,
  } = storyData;
  const navigation = useNavigation();
  const imageUri =
    'http://api.xstudio-mclub.url.tw/images/update/' + main_menu_image;
  const hasChapter = chapter_type === '章節' ?? false;
  const isOpen = open === '公開' ?? false;

  const padImgStyle = screenWidth > 500 ? { width: 225, height: 330 } : {};

  const chapter = useMemo(() => {
    return nochapter?.find((e) => e.storyId === id);
  }, [nochapter]);

  const storyStatus = useMemo(() => {
    const read = storyCache?.continueStory?.find((e) => +e.storyId === +id);
    const finish = storyCache?.finishStory?.find((e) => +e.storyId === +id);
    return { read, finish };
  }, [storyCache]);

  const storyPayload = {
    name: main_menu_name,
    author,
    storyId: id,
    chapterId: chapter?.id,
    storyData,
    nochapter,
  };

  if (lang !== '繁體中文') return;

  return (
    <View style={[styles.container]}>
      <Pressable
        style={styles.container}
        onPress={() => {
          // navigation.navigate(routes.STORY, storyPayload);
          // return;
          if (!isOpen) return;
          if (storyStatus?.read)
            Alert.alert(
              main_menu_title,
              main_menu_content,
              [
                {
                  text: main_menu_btn_left ?? '繼續閱讀',
                  onPress: () =>
                    navigation.navigate(routes.STORY, {
                      ...storyPayload,
                      storyId: storyStatus?.read?.storyId ?? id,
                      chapterId: storyStatus?.read?.chapterId ?? chapter?.id,
                      screenId: storyStatus?.read?.screenId,
                    }),
                },
                {
                  text: main_menu_btn_right ?? '重新再來',
                  onPress: () =>
                    hasChapter
                      ? navigation.navigate(routes.CHAPTER, {
                          name: main_menu_name,
                          author,
                          storyId: id,
                          view_color,
                        })
                      : navigation.navigate(routes.STORY, storyPayload),
                },
              ],
              {
                cancelable: true,
              }
            );
          else {
            if (hasChapter)
              navigation.navigate(routes.CHAPTER, {
                name: main_menu_name,
                author,
                storyId: id,
                view_color,
              });
            else navigation.navigate(routes.STORY, storyPayload);
          }
        }}
      >
        {storyStatus?.read ? (
          // 繼續觀看
          <View>
            <Image
              style={styles.coverIcon}
              source={require('../../../assets/continue.png')}
            />
            <Image
              style={[styles.img, padImgStyle]}
              // source={image}
              source={{
                uri: imageUri,
              }}
            />
          </View>
        ) : storyStatus?.finish ? (
          // 重新回味
          <View>
            <Image
              style={styles.coverIcon}
              source={require('../../../assets/reload.png')}
            />
            <Image
              style={[styles.img, padImgStyle]}
              source={{ uri: imageUri }}
            />
          </View>
        ) : (
          // 一般畫面
          <View>
            {!isOpen ? (
              <View style={styles.lock}>
                <Image
                  style={styles.lockIcon}
                  source={require('../../../assets/lock.png')}
                />
              </View>
            ) : null}
            <Image
              style={[styles.img, padImgStyle]}
              source={{ uri: imageUri }}
              // source={image}
            />
          </View>
        )}
        <View style={styles.nameContainer}>
          <AppText
            style={[
              styles.name,
              {
                fontSize: main_menu_font_size || 15,
                color: main_menu_color || '#fff',
                ...(main_menu_weight === '粗' && {
                  fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
                }),
              },
            ]}
          >
            {main_menu_name}
          </AppText>
        </View>
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
    width: 40,
    height: 40,
  },
  lock: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Book;
