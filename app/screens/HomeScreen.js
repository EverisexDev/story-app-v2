import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "./Screen";
import Content from "./Content";

import AppHeader from "../components/AppHeader";
import Books from "../components/Book/Books";
import routes from "../navigations/routes";

function HomeScreen() {
  const books = require("../../assets/story/books");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(routes.CONTINUE);
  }, []);

  return (
    <Screen>
      <AppHeader />
      <Content>
        <FlatList
          data={books.default}
          keyExtractor={(item) => item.type}
          renderItem={({ item }) => <Books books={item} />}
        />
      </Content>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
