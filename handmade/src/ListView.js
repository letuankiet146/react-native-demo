import React from "react"
import { FlatList} from "react-native"
import ItemView from './ItemView'

const listView = (props) => (
    <FlatList
        data={props.listViewData}
        renderItem={
            ({item}) => (
                <ItemView
                    textData={item.value}
                    keyData={item.key}
                    touchHandler={()=>{
                        props.deleteHanlder(item.key)
                    }} />
            )
        }
    />
);


export default listView 