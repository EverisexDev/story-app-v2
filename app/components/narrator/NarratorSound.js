import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';

function NarratorSound({ soundMsg }) {
  const [sound, setSound] = useState();
  async function playSound() {
    const soundUrl =
      'http://api.xstudio-mclub.url.tw/images/update/' + soundMsg;
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { _sound } = await Audio.Sound.createAsync(
      { uri: soundUrl },
      { shouldPlay: true }
    );
    setSound(_sound);
  }

  useEffect(() => {
    return () => {
      setTimeout(() => {
        try {
          console.log('Unloading Sound');
          sound?.unloadAsync();
        } catch {}
      }, 40000);
    };
  }, [sound]);

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

export default NarratorSound;
