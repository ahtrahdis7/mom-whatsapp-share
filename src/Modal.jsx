import { useCallback } from 'react';
import { View, Pressable, Text, Modal } from 'react-native';
import { COLORS } from '../constants'

function CustomModal({ item, visible }){

    const onClickOption = useCallback(() => {

    }, []);

    return (
        <Modal 
        visible={visible}
        animationType="slide"
        transparent={false}
        >
            <View>
                {
                    item.labels && item.labels.map((_item, index) => {
                        return (
                            <Pressable key={index} style={{
                                backgroundColor: COLORS.backgroundColor,
                                padding: 5,
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={onClickOption}>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: '700'}}>{_item}</Text>
                                </View>
                            </Pressable>
                        )
                    })
                }
                <View>
                    <View style={{
                        height: 100,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.TextColorLight
                    }}>
                        <Text>Close</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal;