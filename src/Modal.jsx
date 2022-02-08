import { useCallback } from 'react';
import { View, Pressable, Text, Modal } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { listState } from '../store/store';
import { COLORS } from '../constants'

function CustomModal({ item, visible, setModalVisible }){
    
    const setList = useSetRecoilState(listState);

    const onClickOption = useCallback((label) => {
        setList((oldList) => [...oldList, { name: item.name, qty: label }]);
        setModalVisible(false);
    }, []);

    return (
        <Modal 
        visible={visible}
        animationType="slide"
        transparent={false}
        >
            <View>
                {
                    item.labels && item.labels.map((label, index) => {
                        return (
                            <Pressable key={index} style={{
                                backgroundColor: COLORS.backgroundColor,
                                height: 50,
                                padding: 5,
                                margin: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} onPress={() => onClickOption(label)}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: COLORS.TextColor }}>{label}</Text>
                                </View>
                            </Pressable>
                        )
                    })
                }
                <View>
                    <Pressable onPress={() => setModalVisible(false)} style={{
                        height: 50,
                        width: 100,
                        padding: 5,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.TextColorLight
                    }}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal;