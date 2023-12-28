import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Platform, SafeAreaView } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar style="auto" hidden={true} />
      {children}
    </SafeAreaView>
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
