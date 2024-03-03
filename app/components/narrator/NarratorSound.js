import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';

function NarratorSound({ soundMsg }) {
  const [sound, setSound] = useState('');

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
    playSound();
    return () => {
      setTimeout(() => {
        try {
          console.log('Unloading Sound');
          sound?.unloadAsync();
        } catch {}
      }, 40000);
    };
  }, []);

  return (
    <Pressable onPress={playSound}>
      <Image
        style={styles.img}
        source={require('../../../assets/Sound-W.png')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    width: 200,
  },
});

export default React.memo(NarratorSound);
