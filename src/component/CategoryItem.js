import {View, Image} from 'react-native';
import React from 'react';

export default function CategoryItem({image, style}) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#454545',
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 5,
      }}>
      <Image resizeMode="contain" style={style} source={image} />
    </View>
  );
}
