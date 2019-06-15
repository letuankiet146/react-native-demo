import React, { Component } from "react"
import { View, Text, Button, Image, StyleSheet, Modal, TouchableOpacity } from "react-native"
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

class myModal extends Component {
    onDeleteHandler = () => {
        this.props.dispatch({
            type: 'DELETE'
        })
    }

    onCloseHandler = () => {
        this.props.dispatch({
            type: 'DESELECTED'
        })
    }
    render() {
        {
            let uiModal = null;
            if (this.props.modalContent !== null) {
                uiModal = (
                    <View>
                        <Image
                            style={styles.imageStyle}
                            source={this.props.modalContent.image} />

                        <Text style={styles.placeName}>{this.props.modalContent.value}</Text>
                        <View>
                            <TouchableOpacity onPress={this.onDeleteHandler}>
                                <Icon size={40} name="md-trash" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.onCloseHandler}>
                                <Icon size={40} name="md-close-circle" />
                            </TouchableOpacity>
                        </View>
                    </View >
                );
            }
            return (
                <Modal
                    animationType="slide"
                    visible={this.props.modalContent !== null}>
                    {uiModal}
                </Modal>
            );
        }
    }
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

const mapStateToProps = (state) => {
    return {
        modalContent: state.modalContent
    }
}

export default connect(mapStateToProps)(myModal)