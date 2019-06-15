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
import {connect} from 'react-redux'



class App extends Component {
   

  render() {
    return (
      <View style={styles.container}>
        <MyModal
          modalContent={this.props.modalContent}
        />
        <InputAndButton />
        <ListView 
          listViewData={this.props.stateValueArr} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

const mapPropsToState = (state) => {
  return {
    stateValueArr: state.stateValueArr,
    modalContent: state.modalContent,
    originalKey: state.stateValueArr.length + 1
  }
}
export default connect(mapPropsToState)(App)
