import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <StatusBar style="auto" hidden={true} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 15 : 47,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.homeBackground,
  },
});

export default Screen;
