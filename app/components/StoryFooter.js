import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppButton from "./SendButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function StoryFooter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.input} />
        <AppButton
          title="123"
          onPress={() => {
            console.log("點擊！");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.footerBackground,
    width: "100%",
    paddingBottom: 20,
  },
  details: {
    width: "100%",
    backgroundColor: colors.footerBackground,
    flexDirection: "row",
    paddingTop: 9,
    paddingHorizontal: 10,
  },
  input: {
    width: "80%",
    backgroundColor: colors.textInput,
    borderColor: colors.textInputBorder,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 15,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StoryFooter;
