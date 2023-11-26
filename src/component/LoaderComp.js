import {Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../config/colors';

export default function LoaderComp() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
      }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Text style={{color: 'white'}}>Loading...</Text>
    </SafeAreaView>
  );
}
