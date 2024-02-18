import { View, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import AppText from '../AppText';

const NarratorOption = (props) => {
  const { onPressOption, choseRef } = props;
  // console.log(choseRef);
  return (
    <View>
      {[1, 2, 3].map((e) => {
        if (!props?.[`choice${e}Content`]) return;
        return (
          <Pressable
            key={e}
            onPress={() => {
              onPressOption && onPressOption(props?.[`choice${e}Next`]);
            }}
            disabled={choseRef?.current}
            style={{
              marginBottom: 10,
              justifyContent: 'center',
              alignContent: 'center',
              width: 300,
              height: 50,
              borderWidth: 4,
              backgroundColor: props?.[`choice${e}BaseColor`],
            }}
          >
            <AppText
              style={{
                textAlign: 'center',
                ...(props?.[`choice${e}Weight`] === '粗' && {
                  fontWeight: Platform.OS === 'ios' ? 600 : 'bold',
                }),
                fontSize: +props?.[`choice${e}Size`] ?? 20,
                color: props?.[`choice${e}Color`],
              }}
            >
              {props?.[`choice${e}Content`]}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
};

export default NarratorOption;
