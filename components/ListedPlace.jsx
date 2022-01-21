import { View, Text, StyleSheet } from 'react-native'

export default function ListedPlace(props) {
    return(
        <View style={styles.placeCard}>
            <View className={styles.titleCont}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            {
                props.turnos.map((turno, index) => (
                    <View style={styles.turnos} key={index}>
                        <Text style={styles.turno}>{turno.dia} {turno.hora} - {turno.persona} - {turno.servicio}</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    placeCard:{
        flexDirection:'column',
        backgroundColor:'#ddd',
        width:360,
        margin:10,
        padding:20,
        justifyContent:'space-evenly',
        borderRadius:8,
    },
    title:{
        fontWeight:'bold', 
        fontSize:24,
        paddingVertical:5
    },
    description: {
        color:'#333',
        paddingVertical:5,
        fontWeight:500
    },
    turnos: {
        flexDirection:'row',
        flexWrap:'wrap',
        paddingVertical:10
    },
    turno: {
        color:'#333',
        backgroundColor:'#999',
        padding:2,
    }
})