import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'


function Item({obj,setObj,deleteItem}) {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listWrapper}>
            {

                obj.length > 0 ? 

                    obj.map((item, index ) => {
                        return(
                            <View style={styles.itemHandler}>
                                <View key={index}><Text>{item.descricao}</Text></View>
                                <TouchableOpacity onPress={() => deleteItem(item) }><Feather name={'minus-circle'} size={20} color={'#e35d7a'} /></TouchableOpacity>
                            </View>
                        )
                    } )
                :
                    <View style={[styles.itemHandler,{justifyContent:'center'}]}>
                        <View><Text>nao há tarefas</Text></View>
                    </View>
            }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12
    },
    listWrapper:{
        paddingHorizontal:8,
        borderColor:'#bababa',
        borderWidth:1
    },
    itemHandler:{
        padding:12,
        borderBottomColor:'#e7e7e7',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})

export default Item
