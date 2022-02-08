import { useState } from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import { COLORS } from '../constants';
import Modal from './Modal';

function ItemCard(props){
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 0.4,
            borderRadius: 5,
            borderColor: COLORS.borderColor,
            marginBottom: 10,
            padding: 5
        }}> 
            <View>
                <View style={{
                    // height: 100, 
                    // width: 100, 
                    // backgroundColor: 'grey', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 5
                }}>
                    <Image style={{
                        height: 100, 
                        width: 100,
                    }} source={props.item.image} />
                </View>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: 120
            }}>
                <Text style={{ fontSize: 25, fontWeight: '700', textAlign: 'center', color: COLORS.TextColorDark }}>{props.item.name?.toUpperCase()}</Text>
                <Pressable style={{
                    backgroundColor: COLORS.backgroundColor,
                    borderRadius: 5,
                    padding: 10
                }} onPress={() => setModalVisible(true)} >
                    <Text style={{ 
                        fontSize: 25, 
                        color: COLORS.TextColor, 
                        textAlign: 'center', 
                        fontWeight: '700' 
                    }}>ADD</Text>
                </Pressable>
            </View>
            <Modal visible={modalVisible} item={props.item} setModalVisible={setModalVisible} />
        </View>
    )
}

export default ItemCard;