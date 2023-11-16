import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

function ChatSoundArea({ soundMsg, backgroundColor }) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(soundMsg);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    // return sound
    //   ? () => {
    //       console.log("Unloading Sound");
    //       sound.unloadAsync();
    //     }
    //   : undefined;
    return () => {
      setTimeout(() => {
        try {
          console.log("Unloading Sound");
          sound.unloadAsync();
        } catch {}
      }, 40000);
    };
  }, [sound]);

  return (
    <TouchableOpacity
      onPress={() => {
        playSound();
      }}
    >
      <View style={[styles.container, backgroundColor]}>
        <Image
          style={styles.img}
          source={require("../../../assets/play.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontWeight: "bold",
  },
  img: {
    width: 130,
  },
});

export default ChatSoundArea;
