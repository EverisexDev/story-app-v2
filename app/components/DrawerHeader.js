import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import IconButton from "./IconButton";
import routes from "../navigations/routes";

//navigation.dispatch(DrawerActions.openDrawer())

function DrawerHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconButton
        name="book-open-outline"
        size={35}
        iconSize={35}
        onPress={() => navigation.navigate(routes.MAIN)}
      />
      <IconButton
        name="eye-outline"
        size={35}
        iconSize={35}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default DrawerHeader;
