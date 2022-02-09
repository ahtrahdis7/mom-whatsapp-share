import { View, Pressable, Text, ScrollView, Dimensions, Linking, StyleSheet } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listState } from '../store/store';
import { COLORS } from '../constants'
import { useCallback, useEffect } from 'react';

const WIDTH = Dimensions.get('window').width;

function Checkout({ setTab }) {
    const list = useRecoilValue(listState);
    const setList = useSetRecoilState(listState);

    const objectListToText = () => {
        let text = list.map(item => `${item.name}: ${item.qty}`)
        return text.join('\n');
    }

    const sendToWhatsApp = useCallback(() => {
        let url = `whatsapp://send?text=${objectListToText()}&phone=91=${7789025800}`;
        Linking.openURL(url)
        .then(data => {
            console.log("WhatsApp Opened successfully " + data);  //<---Success
            setList([])
        })
        .catch(() => {
            alert("Make sure WhatsApp installed on your device");  //<---Error
        });
    })
    return (
        <View>
            <ScrollView style={{ width: WIDTH, padding: 10, marginTop: 50 }}>
                { 
                    list && list.map((item, index) => {
                        return (
                            <View style={styles.listItemsCard} key={index}>
                                <Text style={styles.listItemsText} >{item.name}</Text>
                                <Text style={styles.listItemsText} >{item.qty}</Text>
                            </View>
                        )
                    })
                }
                {
                    list.length === 0 && <Text style={styles.listItemsText}> Nothing is here...</Text>
                }
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <View>
                    <Pressable style={styles.backToListButton} onPress={() => setTab("list")}>
                        <View>
                            <Text style={styles.buttonText}>{"<<< LIST"}</Text>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.sendToWhatsApp} onPress={sendToWhatsApp}>
                        <View>
                            <Text style={styles.buttonText}>{"SEND >>>"}</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Checkout;

const styles = StyleSheet.create({
    listItemsCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        margin: 2,
        padding: 2,
    }, listItemsText: { 
        fontSize: 30, 
        fontWeight: '700', 
        color: COLORS.backgroundColor 
    }, sendToWhatsApp: {
        backgroundColor: COLORS.backgroundColor, 
        height: 60, 
        width:  WIDTH/2 - 5,
        borderTopLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center' 
    }, buttonText: {
        fontSize: 25, 
        fontWeight: '700', 
        color: COLORS.TextColor 
    }, backToListButton: {
        backgroundColor: COLORS.backgroundColor, 
        height: 60,
        width:  WIDTH/2 - 5,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center' ,
    }, buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})