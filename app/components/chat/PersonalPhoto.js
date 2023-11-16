import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import StoryContext from "../story/context";

import AppText from "../AppText";

function PersonalPhoto({ photo, name, nameColor }) {
  const { currentChatIdx, setCurrentChatIdx } = useContext(StoryContext);
  const intro = require("../../../assets/story/Gone/profile/intro");

  return (
    <TouchableOpacity
      onPress={() => {
        const introToShow = intro.default.filter((i) => i.name === name)[0]
          ?.intro;
        if (introToShow) {
          Alert.alert(name, introToShow);
        } else {
          setCurrentChatIdx(currentChatIdx + 1);
        }
      }}
    >
      <View style={styles.container}>
        <Image fadeDuration={0} style={styles.img} source={photo} />
        <AppText style={[styles.nameText, { color: nameColor }]}>
          {name}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameText: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
});

export default PersonalPhoto;
