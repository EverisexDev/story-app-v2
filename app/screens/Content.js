import React from "react";
import { View, StyleSheet } from "react-native";

function Content({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    padding: 15,
  },
});

export default Content;
