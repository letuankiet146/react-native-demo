/**
 * @format
 */

import React, { Component } from "react"
import { Navigation } from 'react-native-navigation'
import App from './App';
import DetailScreen from './screen/DetailScreen'
import { name as appName } from './app.json';
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import reducer from './src/redux/Reducer';
import Icon from 'react-native-vector-icons/Ionicons'

const myStore = createStore(reducer)
const Myredux = () => (
  <Provider store={myStore}>
    <App />
  </Provider>
)
Navigation.registerComponent(appName, () => Myredux);
Navigation.registerComponent("DetailScreen", () => DetailScreen);

Promise.all([ 
  Icon.getImageSource("md-apps", 50),
  Icon.getImageSource("md-stats", 50)
]).then(source => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: appName,
                passProps: {
                  text: 'This is tab 1'
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Main',
                icon: source[0],
                testID: 'FIRST_TAB_BAR_BUTTON'
              }
            }
          }
        },
        {
          component: {
            name: 'DetailScreen',
            passProps: {
              text: 'This is tab 2'
            },
            options: {
              bottomTab: {
                text: 'Detail',
                icon: source[1],
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        }]
      }
    }
  })
})
