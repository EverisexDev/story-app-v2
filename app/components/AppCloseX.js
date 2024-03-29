import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";
import colors from "../config/colors";

function AppCloseX() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <IconButton
          name="close"
          size={35}
          iconSize={35}
          iconColor="#fff"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: colors.black,
  },
  icon: {
    marginRight: 10,
    marginTop: 10,
  },
});

export default AppCloseX;
