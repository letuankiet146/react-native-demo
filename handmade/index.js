/**
 * @format
 */

import React,{Component } from "react"
import {AppRegistry} from 'react-native';
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
AppRegistry.registerComponent(appName, () => Myredux);
