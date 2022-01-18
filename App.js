import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import logo from './assets/logo.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>NAOREMA</Text>
      <Image style={styles.logo} source={logo}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:'5rem',
    height:'5rem'
  }
});
