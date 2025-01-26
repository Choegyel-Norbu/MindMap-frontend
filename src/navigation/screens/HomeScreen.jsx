import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <View>
        <View sthle={styles.homeContainer}>
          <View style={styles.bodyContainer}></View>
        </View>

        <Button
          title="Go to About us"
          onPress={() =>
            navigation.navigate('aboutUs', {
              name: 'TashiWasp',
              location: 'Ngyamey',
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 5,
    padding: 5,
  },
  bodyContainer: {
    height: '60%',
    width: '100%',
    // backgroundColor: '#00e6e6',
  },
});
