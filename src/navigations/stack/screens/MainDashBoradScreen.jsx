import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MainDashBoradScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.profileDpContainer}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/thumb_back/fw800/background/20240701/pngtree-a-beautiful-girl-work-on-online-with-computer-image_15922125.jpg',
          }}
          style={styles.dpStyle}
        />
        <Text>Ms. Michalle</Text>
        <Text> lgjslkdjkllj kdgjsldj k</Text>
      </View>

      <View></View>

      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileDpContainer: {
    marginTop: 70,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  dpStyle: {
    height: 100,
    width: 100,
    borderRadius: 60,
  },
});
