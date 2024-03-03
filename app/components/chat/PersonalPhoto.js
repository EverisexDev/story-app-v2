import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  Platform,
} from 'react-native';

import AppText from '../AppText';
const domain = 'http://api.xstudio-mclub.url.tw/images/update/';

function PersonalPhoto(props) {
  const {
    photo,
    name,
    role_infor,
    role_foolproof_title,
    role_foolproof_content,
    roleConf,
    showInfo,
    // onPressOption,
  } = props;

  return (
    <Pressable
      onPress={() => {
        showInfo
          && Alert.alert(role_foolproof_title, role_infor, [
              {
                text: role_foolproof_content ?? '',
                cancelable: true,
              },
            ])
          // : onPressOption && onPressOption(null);
      }}
    >
      <View style={styles.container}>
        <Image
          fadeDuration={0}
          style={styles.img}
          source={{ uri: domain + photo }}
        />
        <AppText
          style={[
            styles.nameText,
            {
              color: roleConf?.role_name_color,
              fontSize: roleConf?.role_name_size || 20,
              ...(roleConf?.role_name_weight === '粗' && {
                fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
              }),
            },
          ]}
        >
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

export default React.memo(PersonalPhoto);
