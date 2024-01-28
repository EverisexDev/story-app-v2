import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import AppHeader from '../components/AppHeader';
import AppText from '../components/AppText';

import Screen from './Screen';

import Content from './Content';
import colors from '../config/colors';
import storage from '../storage/storage';
import Book from '../components/Book/Book';

function ReviewScreen() {
  const [storyCache, setStoryCache] = useState(null);

  useEffect(() => {
    async function getStories() {
      const finishStory = await storage.getStorys('finishStory');
      setStoryCache(finishStory);
    }
    getStories();
  }, []);
  
  return (
    <Screen>
      <AppHeader />
      <Content>
        <View style={styles.books}>
          {!storyCache ? (
            <AppText style={styles.noBooks}>尚未看完任何書籍</AppText>
          ) : (
            <FlatList
              data={storyCache ?? []}
              keyExtractor={(item) => item?.id?.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <Book storyData={item?.storyData} nochapter={item?.nochapter} showReviewIcon={true}/>
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
    alignItems: 'flex-start',
  },
  noBooks: {
    color: colors.leftChatBackground,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
