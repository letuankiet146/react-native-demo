import React, { Component } from "react"
import { FlatList } from "react-native"
import ItemView from './ItemView'
import { connect } from 'react-redux'

class listView extends Component {
    
    render() {
        return (
            <FlatList
                data={this.props.listViewData}
                renderItem={
                    ({ item }) => (
                        <ItemView
                            textData={item.value}
                            keyData={item.key}
                            onSelected={()=>{
                                this.props.dispatch({
                                    type: 'SELECTED',
                                    keyData: item.key
                                })
                            }} />
                    )
                }
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        listViewData: state.stateValueArr
    }
}
export default connect(mapStateToProps)(listView)