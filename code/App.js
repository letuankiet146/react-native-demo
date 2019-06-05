/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TopView from "./src/components/View/TopView"
import BottomView from "./src/components/View/BottomView"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    places: []
  }

  render() {
    return (
      <View style={styles.myStyle}>
        <TopView onPlaceAdded={this.placeAddedHandler} />
        <BottomView places={this.state.places} deleteItem={this.deleteItemHandler} />
      </View>
    );
  }

  deleteItemHandler = itemIndex => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, i) => {
          return itemIndex !== i;
        })
      };
    });
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    })
  }
}

const styles = StyleSheet.create({

  myStyle: {
    flexDirection: "column",
  },
  buttonStyle: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
