import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

// import IconButton from "./IconButton";
// import routes from "../navigations/routes";

//navigation.dispatch(DrawerActions.openDrawer())

function AppHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Image
          style={styles.imgIcon}
          source={require("../../assets/blueeye.png")}
        />
      </TouchableOpacity>
      {/* <IconButton
        name="eye-outline"
        size={35}
        iconSize={35}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      /> */}
      {/* <IconButton
        name="book-open-outline"
        size={35}
        iconSize={35}
        onPress={() => navigation.navigate(routes.OTHERS)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  imgIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default AppHeader;
