import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

import AppHeader from '../components/AppHeader';
import AppText from '../components/AppText';
import colors from '../config/colors';
import storage from '../storage/storage';
import Content from './Content';
import Screen from './Screen';

function VersionScreen() {
  const isFocused = useIsFocused();
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.xstudio-mclub.url.tw/api/v1/admin/about');
        if (!response.ok) {
          throw new Error('API請求失敗');
        }
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].about_content);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Screen>
      <AppHeader />
      <Content>
        <ScrollView>
          <AppText>{quote}</AppText>
        </ScrollView>
      </Content>
    </Screen>
  );
}

export default VersionScreen;
