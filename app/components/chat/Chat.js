import React, { useState, useMemo, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, Pressable } from 'react-native';

import colors from '../../config/colors';
import ChatImageArea from './ChatImageArea';
import ChatSoundArea from './ChatSoundArea';

import ChatTextArea from './ChatTextArea';
import ChatVideoArea from './ChatVideoArea';
import PersonalPhoto from './PersonalPhoto';
import useStore from '../../store/story';

const domain = 'http://api.xstudio-mclub.url.tw/images/update/';
const screenWidth = Dimensions.get('window').width;

function Chat({
  textContentColor,
  textContentWeight,
  textContentSize,
  textContentBaseColor,
  textMsg,
  soundMsg,
  imgMsg,
  videoMsg,
  role,
  roleName,
  roleList,
  roleConf,
  onPressOption,
}) {
  const roleData = useMemo(() => {
    return roleList?.find((e) => e?.role_name?.trim() === roleName?.trim());
  }, [role, roleList]);

  const imgSize = useStore((state) => state.imgSize);
  const setImgSize = useStore((state) => state.setImgSize);

  useEffect(() => {
    if (!imgMsg) return;
    if (imgSize) setImgSize(null);
    const imageUrl = domain + imgMsg;
    Image.getSize(imageUrl, (width, height) => {
      let resizeRate =
        screenWidth > 500 ? (screenWidth * 0.6) / width : 256 / width;
      const newImage = {
        width: screenWidth > 500 ? screenWidth * 0.6 : 256,
        height: height * resizeRate,
      };
      setImgSize(newImage);
    });
  }, [imgMsg]);

  const LeftOrRight = () => {
    if (role !== '主角') {
      return (
        <View style={[styles.chatLeft]}>
          <PersonalPhoto
            photo={roleData?.role_pic}
            name={roleData?.role_name}
            {...roleData}
            roleConf={roleConf}
            role={role}
          />
          {textMsg ? (
            <ChatTextArea
              textMsg={textMsg}
              backgroundColor={{
                backgroundColor:
                  roleData?.role_sex !== '女'
                    ? roleConf?.boy_Supporting_Color
                    : roleConf?.girl_Supporting_Color,
              }}
              textStyle={{
                fontSize: textContentSize || 20,
                color: textContentColor || '#fff',
                ...(textContentWeight === '粗' && {
                  fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
                }),
              }}
            />
          ) : null}
          {soundMsg ? (
            <ChatSoundArea
              soundMsg={soundMsg}
              backgroundColor={
                textContentBaseColor
                  ? { backgroundColor: textContentBaseColor }
                  : styles.leftBackground
              }
            />
          ) : null}
          {imgMsg ? (
            <ChatImageArea
              imgMsg={imgMsg}
              backgroundColor={styles.imgBackground}
              imgSize={imgSize}
            />
          ) : null}
          {videoMsg ? <ChatVideoArea videoMsg={videoMsg} /> : null}
        </View>
      );
    } else {
      return (
        <View style={[styles.chatRight]}>
          {textMsg ? (
            <ChatTextArea
              textMsg={textMsg}
              backgroundColor={
                roleConf?.main_Role_Name_Color
                  ? { backgroundColor: roleConf?.main_Role_Name_Color }
                  : styles.rightBackground
              }
              textStyle={{
                fontSize: textContentSize || 20,
                color: textContentColor || '#fff',
                ...(textContentWeight === '粗' && {
                  fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
                }),
              }}
            />
          ) : null}
          {soundMsg ? (
            <ChatSoundArea
              soundMsg={soundMsg}
              backgroundColor={styles.rightBackground}
            />
          ) : null}
          {imgMsg ? (
            <ChatImageArea
              imgMsg={imgMsg}
              backgroundColor={styles.imgBackground}
              // size={size}
            />
          ) : null}
          {videoMsg ? <ChatVideoArea videoMsg={videoMsg} /> : null}
          <PersonalPhoto
            photo={roleData?.role_pic}
            name={roleData?.role_name}
            {...roleData}
            roleConf={roleConf}
            role={role}
          />
        </View>
      );
    }
  };
  return (
    <Pressable onPress={() => onPressOption(null)}>
      <LeftOrRight />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chatLeft: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  chatRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  leftBackground: {
    backgroundColor: colors.leftChatBackground,
  },
  rightBackground: {
    backgroundColor: colors.rightChatBackground,
  },
  imgBackground: {
    backgroundColor: colors.imgChatBackground,
  },
});

export default React.memo(Chat);
