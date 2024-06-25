import { Text, View } from "react-native";
import {styles} from './GarageStyle'
import CardView from "../../components/CardView";

export default function GarageScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox }>
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.topRight]}></View>
                <View style={[styles.triangleCorner, styles.downLeft]}></View>
                <View style={[styles.triangleCorner, styles.downRight]}></View>
                <CardView/>
            </View>
            
        </View>
    )
}