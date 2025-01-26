import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AboutUsScreen({route}) {
  const {name} = route.params;
  const {location} = route.params;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
