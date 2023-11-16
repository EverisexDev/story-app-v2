import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Book from "./Book";

function Books({ books }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.type}>{books.type}</AppText>
      <FlatList
        data={books.storys}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        renderItem={({ item }) => (
          <Book
            name={item.name}
            author={item.author}
            cover={item.cover}
            story={item.story}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  type: {
    fontSize: 21,
    fontWeight: "bold",
    color: colors.leftChatBackground,
  },
  name: {
    fontSize: 21,
  },
});

export default Books;
