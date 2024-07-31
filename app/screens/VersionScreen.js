import React, { useState, useEffect } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import AppHeader from '../components/AppHeader';
import Content from './Content';
import Screen from './Screen';

function VersionScreen() {
  const [quote, setQuote] = useState('');
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.xstudio-mclub.url.tw/api/v1/admin/about');
        if (!response.ok) {
          throw new Error('API請求失敗');
        }
        const data = await response.json();
        if (data.length > 0) {
          // 替換相對圖片URL為絕對URL
          const modifiedHtml = data[0].about_content.replace(
            /src="\/images\//g,
            `src="http://api.xstudio-mclub.url.tw/images/`
          );
          setQuote(modifiedHtml);
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
          <RenderHtml contentWidth={width} source={{ html: quote }} />
        </ScrollView>
      </Content>
    </Screen>
  );
}

export default VersionScreen;
