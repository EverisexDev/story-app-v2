import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import Screen from './Screen';
import { useIsFocused } from '@react-navigation/native';

import Content from './Content';
import AppText from '../components/AppText';
import storage from '../storage/storage';
import Book from '../components/Book/Book';
import colors from '../config/colors';

function ContinueScreen() {
  const [storyCache, setStoryCache] = useState(null);
  const isFocus = useIsFocused();

  useEffect(() => {
    async function getStories() {
      const continueStory = await storage.getStorys('continueStory');
      setStoryCache({ continueStory });
    }
    getStories();
  }, [isFocus]);

  return (
    <Screen>
      <AppHeader />
      <Content>
        <View style={styles.books}>
          {!storyCache?.continueStory ? (
            <AppText style={styles.noBooks}>尚未閱覽任何書籍</AppText>
          ) : (
            <FlatList
              data={storyCache?.continueStory ?? []}
              keyExtractor={(item) => item?.storyId?.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <Book
                  storyData={item?.storyData}
                  cachedIndex={item?.cachedIndex}
                  nochapter={item?.nochapter}
                  showIcon={true}
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
    alignItems: 'flex-start',
  },
  noBooks: {
    color: colors.white,
    fontSize: 20,
    // fontWeight: 'bold',
  },
});

export default ContinueScreen;
