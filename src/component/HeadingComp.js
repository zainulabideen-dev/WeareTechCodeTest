import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../config/colors';

export default function HeadingComp({label}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          width: 7,
        }}></View>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 17,
          fontWeight: '300',
          marginLeft: 10,
        }}>
        {label}
      </Text>
    </View>
  );
}
