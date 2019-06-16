/**
 * @format
 */

import React,{Component } from "react"
// import {AppRegistry} from 'react-native';
import {Navigation} from 'react-native-navigation'
import App from './App';
import {name as appName} from './app.json';
import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux"
import reducer from './src/redux/Reducer';

const myStore = createStore(reducer)
const Myredux = ()=>(
    <Provider store={myStore}>
        <App/>
    </Provider>
)
Navigation.registerComponent(appName, () => Myredux); 

Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: appName,
            passProps: {
              text: 'stack with one child'
            }
          }
        }],
        options: {
          topBar: {
            title: {
              text: 'Hello Navi'
            }
          }
        }
      }
    }
  });