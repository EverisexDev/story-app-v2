import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';

function NarratorSound({ soundMsg, soundImg }) {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundMsg);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    // 組建卸載時執行
    // return sound
    //   ? () => {
    //       setTimeout(() => {
    //         try {
    //           console.log("Unloading Sound");
    //           sound.unloadAsync();
    //         } catch {}
    //       }, 1000);
    //     }
    //   : undefined;
    return () => {
      setTimeout(() => {
        try {
          console.log('Unloading Sound');
          sound.unloadAsync();
        } catch {}
      }, 40000);
    };
  }, [sound]);

  return (
    <Pressable
      onPress={() => {
        playSound();
      }}
    >
      <Image style={styles.img} source={soundImg} />
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
