import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import AppCloseX from '../components/AppCloseX';
const screenWidth = Dimensions.get('window').width;

function ShowImageScreen({ route }) {
  const { img } = route.params;
  const [size, setSize] = useState({});

  console.log(img);
  useEffect(() => {
    Image.getSize(img, (width, height) => {
      const newImage = {
        width: screenWidth,
        height: (screenWidth / width) * height,
      };
      setSize(newImage);
    });
  }, [img]);
  return (
    <View style={styles.container}>
      <AppCloseX />
      {/* <View style={styles.container}> */}
        <Image source={{ uri: img }} style={[styles.img, { ...size }]} />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width,
    height: 300,
  },
});

export default ShowImageScreen;
