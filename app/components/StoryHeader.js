import React, { useContext } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';
import defaultStyle from '../config/styles';

function StoryHeader({ storyName, author, config }) {
  const {
    author_color,
    author_size,
    author_weight,
    stroy_name_color,
    stroy_name_size,
    stroy_name_weight,
  } = config ?? {
    author_color: '',
    author_size: 15,
    author_weight: '粗',
    stroy_name_color: '',
    stroy_name_size: 15,
    stroy_name_weight: '粗',
  };

  return (
    <View style={styles.container}>
      <AppText
        style={[
          defaultStyle.text,
          styles.text,
          {
            fontSize: stroy_name_size,
            color: stroy_name_color?.trim() || '#fff',
            ...(stroy_name_weight === '粗' && {
              fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
            }),
          },
        ]}
      >
        {storyName}
      </AppText>
      <AppText
        style={[
          defaultStyle.text,
          styles.text,
          {
            fontSize: author_size,
            color: author_color || '#fff',
            ...(author_weight === '粗' && {
              fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
            }),
          },
        ]}
      >
        {author}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    paddingHorizontal: 15,
    // marginBottom:20,
    marginTop: 10,
    paddingBottom: 2,
    backgroundColor: colors.transparent,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default StoryHeader;
