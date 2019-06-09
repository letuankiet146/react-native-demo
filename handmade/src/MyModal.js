import React from "react"
import { View, Text, Button, Image, StyleSheet, Modal } from "react-native"

const myModal = (props) => {
    let uiModal = null;
    if (props.modalContent !== null) {
        uiModal = (
            <View>
                <Image
                    style={styles.imageStyle}
                    source={props.modalContent.image} />

                <Text style={styles.placeName}>{props.modalContent.value}</Text>
                <Button title="Delete" onPress={props.modalDelete} />
                <Button title="Close" onPress={props.modalClose} />
            </View>
        );
    }

    return (
        <Modal 
        animationType="slide"
        visible={props.modalContent !== null}>
            {uiModal}
        </Modal>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
      }
})

export default myModal