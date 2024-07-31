import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconButton({
  name,
  size = 40,
  iconSize = size * 0.5,
  backgroundColor = '#000',
  iconColor = '#000',
  onPress,
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialCommunityIcons name={name} color={iconColor} size={iconSize} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
  },
});

export default IconButton;
