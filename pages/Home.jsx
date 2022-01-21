import { View, Text, StyleSheet } from 'react-native'
import ListedPlace from '../components/ListedPlace';

export default function Home() {

  const places = [
    {
      name:'La Tranquilidad',
      description: 'Aguirre 0202',
      turnos: [{
        hora:'1pm',
        dia:'Lunes',
        servicio:'pedicuria',
        persona:'Mane'
      }, {
        hora:'2pm',
        dia:'Sabado',
        servicio:'manicuria',
        persona:'Miriam'
      }]
    },
    {
      name:'Casa',
      description:'Piran 1947',
      turnos:[{
        hora:'1pm',
        dia:'Lunes',
        servicio:'pedicuria',
        persona:'Mara'
        }, {
        hora:'2pm',
        dia:'Sabado',
        servicio:'manicuria',
        persona:'Nahuel'
      }]
    },
    {
      name:'Domicilios',
      description:'Varios',
      turnos:[{
        hora:'2pm',
        dia:'Sabado',
        servicio:'manicuria',
        persona:'Nahuel'
      }, {
        hora:'2pm',
        dia:'Sabado',
        servicio:'manicuria',
        persona:'Nahuel'
      }]
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={{color:'#000', fontWeight:'bold', fontSize:'1.2rem'}}>+ Agregar Turno</Text>
        </View>
        <View style={styles.delBtn}>
          <Text style={{color:'#000', fontWeight:500, fontSize:'1.2rem'}}>Quitar Turno X</Text>
        </View>
      </View>
      
      {
        places.map((place, index) => (
          <ListedPlace name={place.name} description={place.description} turnos={place.turnos} key={index}/>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#214252'
  },
  logo: {
    width:80,
    height:80
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical:30
  },
  button: {
    padding:15,
    paddingHorizontal:20,
    backgroundColor:'#00B891',
    borderRadius:15,
    margin:6
  },
  delBtn: {
    padding:15,
    paddingHorizontal:20,
    backgroundColor:'#C14030',
    borderRadius:15,
    margin:6
  }
});