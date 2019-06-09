import React from "react"
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"

const itemView = (props) => (
    <TouchableOpacity onPress={props.onSelected}>
        <View style={styles.touchableHighlightStyle}>
            <Text style={styles.textStyle}>{props.textData}</Text>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    touchableHighlightStyle: {
        backgroundColor: '#80d4ff',
        marginTop: 5
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 18
    }
}); 
export default itemView 