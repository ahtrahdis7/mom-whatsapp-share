import { View, Pressable, Text, ScrollView, Dimensions } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listState } from '../store/store';
import { COLORS } from '../constants'
import listData from '../data'
import ItemCard from './ItemCard';

const WIDTH = Dimensions.get('window').width;

function ItemList({ setTab }) {
    const list = useRecoilValue(listState);
    return (
        <View>
            <ScrollView style={{ width: WIDTH, padding: 10 }}>
            { 
                list && list.map((item, index) => {
                    return (
                        <Text>{item.name}</Text>
                    )
                })
            }
            </ScrollView>
            <View>
                <Pressable style={{
                    backgroundColor: COLORS.backgroundColor, 
                    height: 60, 
                    justifyContent: 'center',
                    alignItems: 'center' 
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
        </View>
    )
}

export default ItemList;