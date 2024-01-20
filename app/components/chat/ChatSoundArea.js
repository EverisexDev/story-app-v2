import React, { useEffect } from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';

function ChatSoundArea({ soundMsg, backgroundColor }) {
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
    <Pressable
      onPress={playSound}
    >
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

export default ChatSoundArea;
