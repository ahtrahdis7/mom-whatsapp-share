import { View, Pressable, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../constants'
import listData from '../data/data'
import ItemCard from './ItemCard';

const WIDTH = Dimensions.get('window').width;

function ItemList({ setTab }) {
    return (
        <View>
            <View style={{
                marginTop: 20,
                padding: 10
            }}>
                <Text style={{ 
                    fontSize: 25, 
                    fontWeight: '700', 
                    color: COLORS.backgroundColor 
                }}>Add Items To Your List</Text>
            </View>
            <ScrollView style={{ width: WIDTH, padding: 10, marginTop: 10 }}>
            { 
                listData && listData.map((item, index) => {
                    return <ItemCard key={index} item={item} />;
                })
            }
            </ScrollView>
            <View>
                <Pressable style={styles.sendButton} onPress={() => setTab("checkout")}>
                    <View>
                        <Text style={styles.sendText}>{"SEND >>>"}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default ItemList;

const styles = StyleSheet.create({
    sendButton: {
        backgroundColor: COLORS.backgroundColor, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center' 
    }, sendText: {
        color: COLORS.TextColor,
        fontSize: 25,
        fontWeight: '700'
    }
})