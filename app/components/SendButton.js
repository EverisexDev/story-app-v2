import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function SendButton({ title, onPress }) {
  return (
    <Pressable style={[styles.button]} onPress={onPress}>
      <MaterialCommunityIcons name='send' color={colors.sendIcon} size={35} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default SendButton;
