import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

const listItem2 = (obj)=>(
    <TouchableOpacity onPress={obj.touchEvent}>
    <View style={mySytle.listItem}>
        <Text>{obj.placeName}</Text>
    </View>
    </TouchableOpacity>
);

const mySytle = StyleSheet.create({
    listItem: {
        width: "100%",
        padding:10,
        marginBottom:10,
        backgroundColor: '#eee'
    }   
});

export default listItem2;