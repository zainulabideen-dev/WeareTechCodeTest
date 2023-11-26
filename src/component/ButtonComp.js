import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../config/colors';

export default function ButtonComp({label}) {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: COLORS.secondary,
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: COLORS.white,
        }}>
        {label}
      </Text>
    </View>
  );
}
