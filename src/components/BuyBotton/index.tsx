
import { Text, TouchableOpacity, View } from 'react-native'
import {styles} from './style'
import { AntDesign} from '@expo/vector-icons'

export default function BuyBotton(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.botton}>
                <AntDesign 
                name='shoppingcart'
                size={24}
                color='white'
                style={styles.icon}
                />
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
        </View>
    )
}