import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

import logo from './assets/logo.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} resizeMode="cover" style={{flex:1, alignItems:'center'}}>
      <View style={styles.header}>
        <Text style={{color:'#000', fontWeight:'bold', fontSize:'2rem', paddingTop:'.8rem'}}>NAOREMA</Text>
      </View>
      <Text style={{fontWeight:'bold'}}>Esta va a ser tu futura aplicacion</Text>
      <StatusBar style="auto" />
      </ImageBackground >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundImage:{logo}
  },
  header: {
    width:'100vw',
    backgroundColor:'#81FD88',
    textAlign:'center',
    height:'8vh',
  },
  logo: {
    width:'5rem',
    height:'5rem'
  }
});


// #81FD88
// #54DF5B
// #22C229
// #CCCCCC
// #FFFFFF
// #aa2020
