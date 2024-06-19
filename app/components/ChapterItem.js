import {
  View,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigations/routes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ChapterItem = (props) => {
  const {
    chapter_name,
    chapter_name_size,
    chapter_img,
    chapter_name_weight,
    chapter_name_color,
    chapter_infor,
    window_title,
    window_btn_left,
    window_btn_right,
    free_open,
    storyId,
    id,
    lang,
    read_range_end,
    index,
    author,
    storyData,
    nochapter,
    uiConfig,
    storyName,
  } = props ?? {};

  const isFreeOpen = free_open === '開放';
  const navigation = useNavigation();
  const imageUri = `http://api.xstudio-mclub.url.tw/images/update/${chapter_img}`;

  const showAlert = () => {
    // navigation.navigate(routes.STORY, {
    //   storyId,
    //   chapterId: id,
    //   name: storyName,
    //   author,
    //   storyData,
    //   nochapter,
    // });
    // return;
    if (isFreeOpen) {
      Alert.alert(
        window_title,
        chapter_infor,
        [
          {
            text: window_btn_left,
            cancelable: true,
          },
          {
            text: window_btn_right,
            onPress: () =>
              navigation.navigate(routes.STORY, {
                storyId: storyId,
                chapterId: id,
                name: storyName,
                author,
                storyData,
                nochapter,
                read_range_end,
              }),
          },
        ],
        {
          cancelable: true,
        }
      );
    } else return;
  };

  if (lang !== '繁體中文') return;
  return (
    <Pressable
      style={[
        styles.container,
        {
          borderWidth: +uiConfig?.chapter_outer_weight,
          borderColor: uiConfig?.chapter_outer_color,
        },
      ]}
      onPress={showAlert}
    >
      <ImageBackground source={{ uri: imageUri }} style={styles.imgBg}>
        {!isFreeOpen ? (
          <View style={styles.lock}>
            <Image
              style={styles.lockIcon}
              source={require('../../assets/lock.png')}
            />
          </View>
        ) : null}
        <AppText
          style={{
            fontSize: chapter_name_size || 20,
            ...(chapter_name_weight === '粗' && {
              fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
            }),
            alignSelf: index % 2 !== 0 ? 'flex-end' : 'flex-start',
            alignItems: 'flex-end',
            color: chapter_name_color || '#fff',
          }}
        >
          {chapter_name}
        </AppText>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: wp('50%'),
    width: wp('90%'),
    borderWidth: 4,
    marginBottom: 20,
  },
  imgBg: { width: '100%', height: '100%', justifyContent: 'flex-end' },
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

export default ChapterItem;
