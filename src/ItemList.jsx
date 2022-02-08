import { View, Pressable, Text, ScrollView, Dimensions } from 'react-native';
import { COLORS } from '../constants'
import listData from '../data'
import ItemCard from './ItemCard';

const WIDTH = Dimensions.get('window').width;

function ItemList({ setTab }) {
    return (
        <View>
            <ScrollView style={{ width: WIDTH, padding: 10, marginTop: 10 }}>
            { 
                listData && listData.map((item, index) => {
                    return <ItemCard key={index} item={item} />;
                })
            }
            </ScrollView>
            <View>
                <Pressable style={{
                    backgroundColor: COLORS.backgroundColor, 
                    height: 60, 
                    justifyContent: 'center',
                    alignItems: 'center' 
                }} onPress={() => setTab("checkout")}>
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
    )
}

export default ItemList;