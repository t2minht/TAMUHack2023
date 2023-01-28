import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Hackers!</Text>

      <StatusBar style="auto" />
      <NavigationBar />
    </View>
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
