import React, { Component } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

class TopView extends Component {
    state = {
        placeName: ""
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ width: 300 }}
                    placeholder="Input here please"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                />
                <Button
                    onPress={this.placeSubmitHandler}
                    title="Hit me"
                    style={styles.buttonStyle}
                />
            </View>
        );
    }

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };
}
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row'
    }
});
export default TopView