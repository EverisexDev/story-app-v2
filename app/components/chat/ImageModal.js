import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import AppCloseX from '../AppCloseX';

const ImageModal = (props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle: () => setModalVisible((prev) => !prev),
  }));

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AppCloseX onPress={() => setModalVisible((prev) => !prev)} />
        <View style={[styles.container]}>
          <Image
            source={{ uri: props?.imageUrl }}
            style={{ width: '100%', height: '60%' }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: '#000',
    // opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default forwardRef(ImageModal);
