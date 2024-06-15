import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';

function ChatSoundArea({ soundMsg, backgroundColor }) {
  const [sound, setSound] = useState();

  const playSound = useCallback(async () => {
    const soundUrl =
      'http://api.xstudio-mclub.url.tw/images/update/' + soundMsg;
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { _sound } = await Audio.Sound.createAsync(
      { uri: soundUrl },
      { shouldPlay: true }
    );
    setSound(_sound);
  }, [soundMsg]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        try {
          // console.log('Unloading Sound');
          sound?.unloadAsync();
        } catch {}
      }, 40000);
    };
  }, []);

  return (
    <Pressable onPress={playSound} style={{ flex: 1 }}>
      <View style={[styles.container, backgroundColor]}>
        <Image
          style={styles.img}
          source={require('../../../assets/play.png')}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontWeight: 'bold',
  },
  img: {
    width: 130,
  },
});

export default React.memo(ChatSoundArea);
