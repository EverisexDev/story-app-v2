import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import AppCloseX from "../components/AppCloseX";

function ShowImageScreen({ route }) {
  const img = route.params;
  return (
    <>
      <AppCloseX />
      <View style={styles.container}>
        <Image source={{uri: img}} style={{ width: img.width }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: Dimensions.get("window").width,
  },
});

export default ShowImageScreen;
