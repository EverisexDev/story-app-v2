import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Book from "./Book";
import axios from 'axios';

function Books({ books }) {
  const [storyType, setStoryType] = useState(''); 
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://api.xstudio-mclub.url.tw/api/v1/admin/story-list');
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
      {/* 故事類別 */}
      {/* Note:http://api.xstudio-mclub.url.tw/admin/story-type 中的 story_type*/}
    <AppText style={styles.type}>{storyType.story_type}</AppText>


    <FlatList
    data={books.storys}
    keyExtractor={(item) => item.id.toString()}
    horizontal={true}
    renderItem={({ item }) => (
      <Book
      // 故事名稱
      name={item.name}
      // 故事作者
      author={item.author}
      // 故事封面
      cover={item.cover}
      // 故事內容
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