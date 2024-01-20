import React from 'react';
import { View, StyleSheet, Image, Pressable, Alert } from 'react-native';

import AppText from '../AppText';
const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function PersonalPhoto(props) {
  const {
    role_pic: photo,
    role_name: name,
    nameColor,
    role_infor,
    role_foolproof_title,
    role_foolproof_content,
  } = props;

  return (
    <Pressable
      onPress={() => {
        Alert.alert(role_foolproof_title, role_infor, [
          {
            text: role_foolproof_content ?? '',
            cancelable: true,
          },
        ]);
      }}
    >
      <View style={styles.container}>
        <Image
          fadeDuration={0}
          style={styles.img}
          source={{ uri: domain + photo }}
        />
        <AppText style={[styles.nameText, { color: nameColor }]}>
          {name}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
});

export default PersonalPhoto;
