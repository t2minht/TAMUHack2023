import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>

      <Text>Hackers!</Text>

      <StatusBar style="auto" />
      <NavigationBar />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1B4A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
