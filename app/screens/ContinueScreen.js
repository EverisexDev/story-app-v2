import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import AppHeader from "../components/AppHeader";
import Screen from "./Screen";

import Content from "./Content";
import AppText from "../components/AppText";
import storage from "../storage/storage";
import Book from "../components/Book/Book";
import colors from "../config/colors";
import routes from "../navigations/routes";

function ContinueScreen() {
  const [continueStorys, setContinueStorys] = useState("");
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getStorys() {
      let storys = await storage.getStorys("continueStory");
      setContinueStorys(storys);
    }
    getStorys();
  }, [isFocused]);

  useEffect(() => {
    if (continueStorys !== "") {
      if (
        continueStorys === null ||
        continueStorys === undefined ||
        continueStorys.length === 0
      ) {
        if (isFocused) {
          navigation.navigate(routes.HOME);
        }
      }
    }
  }, [continueStorys]);

  return (
    <Screen>
      <AppHeader />
      <Content>
        <View style={styles.books}>
          {(continueStorys === null ||
            continueStorys === undefined ||
            continueStorys.length === 0) && (
            <AppText style={styles.noBooks}>尚未閱覽任何書籍</AppText>
          )}
          {continueStorys !== "" && (
            <FlatList
              data={continueStorys}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <Book
                  name={item.name}
                  author={item.author}
                  cover={item.cover}
                  story={item.story}
                  backSN={item.backSN}
                  chatSN={item.chatSN}
                  cont={true}
                />
              )}
            />
          )}
        </View>
      </Content>
    </Screen>
  );
}

const styles = StyleSheet.create({
  books: {
    alignItems: "flex-start",
  },
  noBooks: {
    color: colors.leftChatBackground,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ContinueScreen;
