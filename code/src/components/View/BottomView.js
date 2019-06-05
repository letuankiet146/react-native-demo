import React from "react"
import { View } from "react-native"

import ListItem from "../ListItem/ListItem"



const bottomView = (props) => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} touchEvent={props.deleteItem(i)} />
    ));
    return <View>{placesOutput}</View>;
};

export default bottomView