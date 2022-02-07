import { View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import ItemList from './ItemList';
import Checkout from './Checkout';

function Main(){
    const [state, setState] = useState("list");
    return (
        <View>
            { state === "list" && <ItemList setTab={setState} /> }
            { state === "checkout" && <Checkout setTab={setState} />}
        </View>
    )
}

export default Main;