import React from "react"
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"

const itemView = (props) => (
    <TouchableOpacity onPress={props.touchHandler}>
        <View style={styles.touchableHighlightStyle}>
            <Text>{props.textData}</Text>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    touchableHighlightStyle: {
        backgroundColor: '#80d4ff',
        marginTop: 5
    }
}); 
export default itemView 