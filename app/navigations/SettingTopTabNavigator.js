import React from "react";
import { Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import routes from "./routes";

import ContinueScreen from "../screens/ContinueScreen";
import ReviewScreen from "../screens/ReviewScreen";
import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import Screen from "../screens/Screen";

const Tab = createMaterialTopTabNavigator();

export default function SettingTopTabNavigator() {
  return (
    <>
      <Screen>
        <AppHeader />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "rgba(242, 242, 242, 1)",
            },
            tabBarLabelStyle: {
              fontWeight: "bold",
            },
            // headerStyle: {
            //   backgroundColor: colors.danger,
            // },
            // headerTitleStyle: {
            //   color: "#fff",
            //   fontWeight: "bold",
            // },
          }}
        >
          <Tab.Screen name={routes.CONTINUE} component={ContinueScreen} />
          <Tab.Screen name={routes.REVIEW} component={ReviewScreen} />
        </Tab.Navigator>
      </Screen>
    </>
  );
}
