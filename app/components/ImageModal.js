import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import AppCloseX from './AppCloseX';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

const screenWidth = Dimensions.get('window').width;
const ImageModal = (props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState({});

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  useImperativeHandle(ref, () => ({
    toggle: toggleModal,
  }));

  useEffect(() => {
    Image.getSize(props?.imageUrl, (width, height) => {
      const newImage = {
        width: screenWidth,
        height: screenWidth / width * height,
      };
      setSize(newImage);
    });
  }, [props?.imageUrl]);

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={1}
        animationOut='fadeOut'
        animationIn='fadeIn'
      >
        <AppCloseX onPress={toggleModal} />
        <View style={styles.container}>
          <Image
            source={{ uri: props?.imageUrl }}
            style={size}
            resizeMode='cover'
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default forwardRef(ImageModal);
