import { View, Text, StyleSheet } from 'react-native'

export default function ListedPlace() {
    return(
        <View style={styles.placeCard}>
            <View className={styles.titleCont}>
                <Text>Lugar de servicio</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    placeCard:{
        flexDirection:'column',
        width:'100vw',
        height:'20vh',
        backgroundColor:'#555',
        padding:20
    },
})