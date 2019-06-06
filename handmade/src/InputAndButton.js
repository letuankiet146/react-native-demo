import React,{Component} from "react"
import { View, TextInput, Button } from "react-native"

export default class InputAndButton extends Component {
    state = {
        inputValue: ""
    }
    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeTextHandler}
                />
                <Button title="OK" onPress={this.onPressHandler} />
            </View>
        );
    }

    onChangeTextHandler = (text) => {
        this.setState({
            inputValue: text
        });
    }

    onPressHandler = () => {
        this.props.buttonEvent(this.state.inputValue);
    }

} 