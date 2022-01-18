import { StyleSheet, Text, View, Image } from 'react-native';

import ListedPlace from './components/ListedPlace';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color:'#000', fontWeight:'bold', fontSize:'2rem'}}>NAOREMA</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={{color:'#000', fontWeight:'bold', fontSize:'1.2rem'}}>+ Agregar Turno</Text>
        </View>
        <View style={styles.delBtn}>
          <Text style={{color:'#000', fontWeight:500, fontSize:'1.2rem'}}>Quitar Turno X</Text>
        </View>
      </View>
      
      <ListedPlace />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#214252'
  },
  header: {
    width:'100vw',
    height:'8vh',
    backgroundColor:'#207020',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:25
  },
  logo: {
    width:'5rem',
    height:'5rem'
  },
  buttonContainer: {
    flexDirection:'row',
    width:'100vw',
    justifyContent:'space-evenly'
  },
  button: {
    padding:15,
    paddingHorizontal:20,
    backgroundColor:'#00B891',
    borderRadius:15
  },
  delBtn: {
    padding:15,
    paddingHorizontal:20,
    backgroundColor:'#C14030',
    borderRadius:15
  }
});


// #81FD88
// #54DF5B
// #22C229
// #CCCCCC
// #FFFFFF
// #aa2020
