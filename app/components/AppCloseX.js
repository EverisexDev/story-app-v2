import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";
import colors from "../config/colors";

function AppCloseX({onPress}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <IconButton
          name="close"
          size={35}
          iconSize={35}
          iconColor="#fff"
          // onPress={onPress}
          onPress={() => navigation.goBack()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    position:'absolute',
    top:70,
    right:30,
    backgroundColor: colors.transparent,
  },
});

export default AppCloseX;
