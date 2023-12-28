import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";

import Screen from "./Screen";

import Content from "./Content";
import colors from "../config/colors";
import storage from "../storage/storage";
import Book from "../components/Book/Book";

function ReviewScreen() {
  const [finishStorys, setFinishStorys] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getStorys() {
      let storys = await storage.getStorys("finishStory");
      setFinishStorys(storys);
    }
    getStorys();
  }, [isFocused]);

  return (
    <Screen>
      <AppHeader />
      <Content>
        <View style={styles.books}>
          {!finishStorys && (
            <AppText style={styles.noBooks}>尚未看完任何書籍</AppText>
          )}
          <FlatList
            data={finishStorys}
            keyExtractor={(item) => item?.id?.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <Book
                name={item.name}
                author={item.author}
                cover={item.cover}
                story={item.story}
                cont={false}
              />
            )}
          />
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

export default ReviewScreen;
