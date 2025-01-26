import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutUsScreen from './AboutUsScreen';

export default function StackApp() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="abotUs" component={AboutUsScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
