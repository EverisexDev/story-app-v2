import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import SettingTopTabNavigator from "./SettingTopTabNavigator";

const Stack = createStackNavigator();

const SettingStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      // headerStyle: { backgroundColor: colors.primary },
      // headerTintColor: "white",
      // headerTitleStyle: {
      //   fontSize: 25,
      //   fontWeight: "bold",
      // },
    }}
  >
    <Stack.Screen
      name={routes.CON_RE_TOPTAB}
      component={SettingTopTabNavigator}
    />
  </Stack.Navigator>
);

export default SettingStackNavigator;
