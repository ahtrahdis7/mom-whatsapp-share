import { useState } from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import Modal from './Modal';

function ItemCard(props){
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.container}> 
            <View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={props.item.image} />
                </View>
            </View>
            <View style={styles.actionsContainer}>
                <Pressable style={styles.addButton} onPress={() => setModalVisible(true)} >
                    <Text style={styles.itemNameText}>+ {" " + props.item.name?.toUpperCase()}</Text>
                </Pressable>
            </View>
            <Modal visible={modalVisible} item={props.item} setModalVisible={setModalVisible} />
        </View>
    )
}

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderColor: COLORS.borderColor,
        marginBottom: 10,
        padding: 5,
    }, imageContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5
    }, image: {
        height: 80, 
        width: 80,
    }, actionsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 150
    }, addButton: {
        borderRadius: 5,
        padding: 10
    }, addText: { 
        fontSize: 25, 
        color: COLORS.TextColor, 
        textAlign: 'center', 
        fontWeight: '700' 
    }, itemNameText: { 
        fontSize: 25, 
        fontWeight: '700', 
        textAlign: 'center', 
        color: COLORS.backgroundColor 
    }
})