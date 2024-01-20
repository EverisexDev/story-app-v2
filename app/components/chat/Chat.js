import React, { useContext, useMemo } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import colors from '../../config/colors';
import StoryContext from '../story/context';
import ChatImageArea from './ChatImageArea';
import ChatSoundArea from './ChatSoundArea';

import ChatTextArea from './ChatTextArea';
import ChatVideoArea from './ChatVideoArea';
import PersonalPhoto from './PersonalPhoto';

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
}) {
  const roleData = useMemo(() => {
    return role?.find((e) => e?.role_name?.trim() === roleName?.trim());
  }, [role]);

  const LeftOrRight = () => {
    if (role !== '主角') {
      return (
        <View style={styles.chatLeft}>
          <PersonalPhoto
            photo={roleData?.role_pic}
            name={roleData?.role_name}
            nameColor={'#000'}
            {...roleData}
          />
          {textMsg ? (
            <ChatTextArea
              textMsg={textMsg}
              backgroundColor={
                textContentBaseColor
                  ? { backgroundColor: textContentBaseColor }
                  : styles.leftBackground
              }
              style={{
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
            />
          ) : null}
          {videoMsg ? <ChatVideoArea videoMsg={videoMsg} /> : null}
        </View>
      );
    } else {
      return (
        <View style={styles.chatRight}>
          {textMsg ? (
            <ChatTextArea
              textMsg={textMsg}
              backgroundColor={styles.rightBackground}
              // chatIdx={chatIdx}
              // setChatIdx={setChatIdx}
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
            />
          ) : null}
          {videoMsg ? <ChatVideoArea videoMsg={videoMsg} /> : null}
          <PersonalPhoto
            photo={roleData?.role_pic}
            name={roleData?.role_name}
            nameColor={'#000'}
          />
        </View>
      );
    }
  };
  return (
    // <Pressable
    //   onPress={() => {
    //     if (!videoMsg) {
    //       console.log('chat')
    //       onPressStory && onPressStory(index)
    //       // setCurrentChatIdx(currentChatIdx + 1);
    //     }
    //   }}
    // >
    <LeftOrRight />
    // </Pressable>
  );
}

const styles = StyleSheet.create({
  chatLeft: {
    flexDirection: 'row',
    paddingVertical: 5,
    // backgroundColor: colors.danger,
  },
  chatRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical: 5,
    // backgroundColor: colors.danger,
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

export default Chat;
