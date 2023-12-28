import {
  View,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  ImageBackground,
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
    chapter_infor,
    window_title,
    window_btn_left,
    window_btn_right,
    free_open,
    storyid,
    id,
    lang,
    toastConfig,
    index,
  } = props ?? {};
  console.log(props);
  const isFreeOpen = free_open === '開放';
  const navigation = useNavigation();
  const imageUri = `http://api.xstudio-mclub.url.tw/${chapter_img}`;

  // const img = require('../../assets/story/story1/images/real1.jpeg');
  const showAlert = () => {
    // navigation.navigate(routes.STORY, { storyId: storyid, chapterId: id });
    if (isFreeOpen) {
      Alert.alert(
        window_title,
        chapter_infor,
        [
          {
            text: window_btn_left,
            onPress: () => navigation.navigate(routes.STORY, { storyId: storyid, chapterId: id }),
            // style: 'cancel',
          },
          {
            cancelable: true,
            text: window_btn_right,
          }
        ],
      );
    } else return;
  };

  if (lang !== '繁體中文') return;
  return (
    <Pressable style={styles.container} onPress={showAlert}>
      <ImageBackground source={imageUri} style={styles.imgBg}>
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
            fontSize: 15 ?? chapter_name_size,
            fontWeight: chapter_name_weight === '粗' ? 'bold' : 'normal',
            alignSelf: index % 2 === 0 ? 'flex-end' : 'flex-start',
            alignItems: 'flex-end',
            color: '#fff',
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
    width: 30,
    height: 30,
  },
  lock: {
    position: 'absolute',
    top: wp('20%'),
    left: wp('40%'),
    zIndex: 1,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChapterItem;
