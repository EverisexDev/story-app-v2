import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Book from "./Book";
import axios from 'axios'; // 引入 Axios

function Books({ books }) {
  const [storyType, setStoryType] = useState(''); // 創建 storyType 狀態
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://api.xstudio-mclub.url.tw/api/v1/admin/story-type');
      if (response.data && Array.isArray(response.data)) {
        const storyTypes = response.data[0];
        setStoryType(storyTypes);
      } else {
        throw new Error('API 請求成功，但未返回預期的數據');
      }
    } catch (error) {
      console.error('API 請求失敗：', error);
    }
  };

  fetchData();
}, []);

  
  return (
    <View style={styles.container}>
      
    <AppText style={styles.type}>{storyType.story_type}</AppText>


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