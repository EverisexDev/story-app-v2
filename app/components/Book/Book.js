import React, { useMemo } from 'react';
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
import routes from '../../navigations/routes';
import AppText from '../AppText';
import colors from '../../config/colors';

const screenWidth = Dimensions.get('window').width;

function Book(props) {
  const {
    storyData = {},
    storyCache,
    nochapter,
    showIcon = false,
    showReviewIcon,
    index,
  } = props;
  const {
    main_menu_name,
    main_menu_name_size = '',
    main_menu_name_color = '',
    main_menu_image = '',
    main_menu_name_weight = '',
    main_menu_btn_left,
    main_menu_btn_right,
    main_menu_content = '',
    main_menu_title = '',
    open = '',
    chapter_type = '',
    author = '',
    id,
    lang,
  } = storyData;
  const navigation = useNavigation();
  const imageUri =
    'http://api.xstudio-mclub.url.tw/images/update/' + main_menu_image;
  const hasChapter = chapter_type === '章節';
  const isOpen = open === '公開';

  const padImgStyle = screenWidth > 500 ? { width: 225, height: 330 } : {};

  const chapter = useMemo(() => {
    return nochapter?.find((e) => e.storyid === id);
  }, [nochapter]);

  const storyStatus = useMemo(() => {
    const read = storyCache?.continueStory?.find((e) => +e.storyId === +id);
    const finish = storyCache?.finishStory?.find((e) => +e.storyId === +id);
    const isNew = !(read || finish);
    return { read, finish, isNew };
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
          // navigation.navigate(routes.CHAPTER, {
          //   name: main_menu_name,
          //   author,
          //   storyId: id,
          // });
          // navigation.navigate(routes.STORY, {...storyPayload, ...storyStatus?.read});
          // return;
          if (!isOpen) return;

          if (showIcon) {
            navigation.navigate(routes.STORY, {
              ...storyPayload,
              ...props,
              // ...storyStatus?.read,
              // storyId: storyStatus?.read?.storyId ?? id,
              // chapterId: storyStatus?.read?.chapterId ?? chapter?.id,
              // cachedIndex
            });
          } else if (showReviewIcon) {
            hasChapter
              ? navigation.navigate(routes.CHAPTER, {
                  name: main_menu_name,
                  author,
                  storyId: id,
                  storyData,
                })
              : navigation.navigate(routes.STORY, storyPayload);
          } else {
            Alert.alert(
              main_menu_title,
              main_menu_content,
              [
                {
                  text: main_menu_btn_left,
                  onPress: () => {
                    hasChapter
                      ? navigation.navigate(routes.CHAPTER, {
                          name: main_menu_name,
                          author,
                          storyId: id,
                          storyData,
                        })
                      : navigation.navigate(routes.STORY, storyPayload);
                  },
                },
                {
                  text: main_menu_btn_right,
                  onPress: () => {
                    console.log({
                      ...storyPayload,
                      ...storyStatus?.read,
                      storyId: storyStatus?.read?.storyId ?? id,
                      chapterId: storyStatus?.read?.chapterId ?? chapter?.id,
                    })
                    navigation.navigate(routes.STORY, {
                      ...storyPayload,
                      ...storyStatus?.read,
                      storyId: storyStatus?.read?.storyId ?? id,
                      chapterId: storyStatus?.read?.chapterId ?? chapter?.id,
                    });
                  },
                },
              ],
              {
                cancelable: true,
              }
            );
          }
        }}
      >
        {showIcon ? (
          // 繼續觀看
          <View>
            <Image
              style={styles.coverIcon}
              source={require('../../../assets/continue.png')}
            />
            <Image
              style={[styles.img, padImgStyle]}
              source={{
                uri: imageUri,
              }}
            />
          </View>
        ) : showReviewIcon ? (
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
            />
            {index === 0 && storyStatus?.isNew ? (
              <Image
                style={[
                  styles.newIcon,
                  { position: 'absolute', top: -15, right: -10 },
                ]}
                source={require('../../../assets/new.png')}
              />
            ) : null}
          </View>
        )}
        <View style={styles.nameContainer}>
          <AppText
            numberOfLines={1}
            style={[
              styles.name,
              {
                fontSize: main_menu_name_size || 15,
                color: main_menu_name_color || '#fff',
                ...(main_menu_name_weight === '粗' && {
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
    width: 150,
    textAlign: 'center',
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
  newIcon: {
    width: 30,
    height: 30,
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
