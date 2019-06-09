/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
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
        <InputAndButton buttonEvent={this.addHandler} />
        <ListView 
        deleteHanlder={this.deleteHandler}
        listViewData={this.state.stateValueArr}/>
      </View>
    );
  }

  addHandler = (inputValue) => { 
    this.key = this.key + 1;
    this.setState((preState)=>{
      return {
        stateValueArr: preState.stateValueArr.concat({key:this.key.toString(), value: inputValue})
      }
    }
    )
  }

  deleteHandler = (keyData) => {
    this.setState((preState)=>{
      return {
        stateValueArr: preState.stateValueArr.filter((stateObj)=>{
          if (stateObj.key !== keyData){
            return true;
          }
        })
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
