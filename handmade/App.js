/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import InputAndButton from './src/InputAndButton'
import ListView from './src/ListView'


export default class App extends Component {
  key=0;
  state = {
    stateValueArr: []
  }

  render() {
    return (
      <View style={styles.container}>
        <InputAndButton buttonEvent={this.buttonHandler} />
        <ListView listViewData={this.state.stateValueArr}/>
      </View>
    );
  }

  buttonHandler = (inputValue) => {
    this.setState((preState)=>{
      return {
        stateValueArr: preState.stateValueArr.concat({key:this.key++, value: inputValue})
      }
    }
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
