import { View, Pressable, Text, ScrollView, Dimensions, Linking } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listState } from '../store/store';
import { COLORS } from '../constants'
import { useCallback, useEffect } from 'react';

const WIDTH = Dimensions.get('window').width;

function Checkout({ setTab }) {
    const list = useRecoilValue(listState);
    const setList = useSetRecoilState(listState);

    const objectListToText = () => {
        let text = list.map(item => `${item.name}: ${item.qty}\n`)
        return text;
    }

    const sendToWhatsApp = useCallback(() => {
        let url = `whatsapp://send?text=${objectListToText()}&phone=91=${7377084314}`;
        Linking.openURL(url)
        .then(data => {
            console.log("WhatsApp Opened successfully " + data);  //<---Success
            setList([])
        })
        .catch(() => {
            alert("Make sure WhatsApp installed on your device");  //<---Error
        });
    })

    useEffect(() => {
        console.log(list)
    }, [list]);
    return (
        <View>
            <ScrollView style={{ width: WIDTH, padding: 10, marginTop: 50 }}>
            { 
                list && list.map((item, index) => {
                    return (
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 50,
                            margin: 2,
                            padding: 2,
                        }} key={index}>
                            <Text style={{ fontSize: 30, fontWeight: '700', color: COLORS.backgroundColor }} >{item.name}</Text>
                            <Text style={{ fontSize: 30, fontWeight: '700', color: COLORS.backgroundColor }} >{item.qty}</Text>
                        </View>
                    )
                })
            }
            {
                list.length === 0 && <Text style={{ fontSize: 30, fontWeight: '700', color: COLORS.backgroundColor }}> Nothing is here...</Text>
            }
            </ScrollView>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Pressable style={{
                        backgroundColor: COLORS.backgroundColor, 
                        height: 60,
                        width:  WIDTH/2 - 5,
                        borderTopRightRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center' ,
                    }} onPress={() => setTab("list")}>
                        <View>
                            <Text style={{
                                color: COLORS.TextColor,
                                fontSize: 25,
                                fontWeight: '700'
                            }}>{"<<< LIST"}</Text>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={{
                        backgroundColor: COLORS.backgroundColor, 
                        height: 60, 
                        width:  WIDTH/2 - 5,
                        borderTopLeftRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center' 
                    }} onPress={sendToWhatsApp}>
                        <View>
                            <Text style={{
                                color: COLORS.TextColor,
                                fontSize: 25,
                                fontWeight: '700'
                            }}>{"SEND >>>"}</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Checkout;