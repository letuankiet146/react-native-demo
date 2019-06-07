import React from "react"
import { Text, FlatList } from "react-native"
import ItemView from './ItemView'

const listView = (props) => (
    <FlatList
        data={props.listViewData}
        renderItem={
            ({item})=>(
                <ItemView textData={item.value}/>
            )
        } 
    />
);

export default listView