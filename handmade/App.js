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
import MyModal from './src/MyModal'
import hinh1 from './src/assets/hinh1.jpg'


export default class App extends Component {
  key = 0;
  state = {
    stateValueArr: [],
    modalContent: null // Modal Content is an element of stateValueArr array
  }

  render() {
    return (
      <View style={styles.container}>
        <MyModal
          modalContent={this.state.modalContent}
          modalDelete={this.deleteHandler}
          modalClose={this.closeHanlder}
        />
        <InputAndButton buttonEvent={this.addHandler} />
        <ListView
          selectedHanlder={this.selectedHanlder}
          listViewData={this.state.stateValueArr} />
      </View>
    );
  }

  addHandler = (inputValue) => {
    this.key = this.key + 1;
    this.setState((preState) => {
      return {
        stateValueArr: preState.stateValueArr.concat({
          key: this.key.toString(),
          value: inputValue,
          image: hinh1
        })
      }
    }
    )
  }

  deleteHandler = () => {
    this.setState((preState) => {
      return {
        stateValueArr: preState.stateValueArr.filter((stateObj) => {
          if (stateObj.key !== preState.modalContent.key) {
            return true;
          }
        }),
        modalContent: null
      }
    });
  }

  selectedHanlder = (keyData) => {
    this.setState((preState) => {
      return {
        modalContent: preState.stateValueArr.find((stateObj) => {
          return stateObj.key === keyData;
        })
      }
    });
  }

  closeHanlder = () => {
    this.setState({
      modalContent: null
    })
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
