import React, { Component } from "react"
import { View, TextInput, Button } from "react-native"
import { connect } from "react-redux"
import hinh1 from '../src/assets/hinh1.jpg' 

class InputAndButton extends Component {
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
        this.props.dispatch({
            type: 'ADD',
            key: this.props.originalKey,
            inputValue: this.state.inputValue,
            image: hinh1
        })
    } 
}
const mapPropsToState = (state)=>{
    return{
        originalKey: state.stateValueArr.length + 1+""
    }
}
export default connect(mapPropsToState)(InputAndButton)