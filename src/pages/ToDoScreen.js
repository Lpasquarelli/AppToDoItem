import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native'

import Item from '../components/Item'

import {api} from '../config/axios'

function ToDoScreen() {

    const [obj,setObj] = useState([{}])
    const [descricao,setDescricao] = useState('')


    const adicionaItem = async () => {
        if(descricao === ''){
            alert("Descrição obrigatoria")
        }else{
            await api.put('api/v1/ToDoList',{
                descricao
            }).then( res => {
                getItens()
                setDescricao('')
            }).catch(e => console.log('erro ao buscar itens'))
        }
    }
    const getItens = async () => {
        await api.get('api/v1/ToDoList').then( res => {
            setObj(res.data)
        }).catch(e => console.log('erro ao buscar itens'))
    }
    const deleteItem = async (item) => {
        await api.delete('api/v1/ToDoList/Delete/'+item.id).then( res => {
            alert("Apagado com Sucesso")
            const objNovo = obj.filter(x => x !== item);
            setObj(objNovo)

        }).catch(e => console.log('erro ao apagar itens'+ e))
    }

    useEffect(() => {
        getItens()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Lista To Do</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <TextInput value={descricao} onChangeText={(e) => {
                    setDescricao(e)
                }} placeholder={'Item'} style={styles.inputHandler} />
                <TouchableOpacity onPress={() => adicionaItem()}>
                    <Text style={styles.buttonHadler}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <Item obj={obj} setObj={setObj} deleteItem={deleteItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12
    },
    inputHandler:{
        padding:12,
        width: '70%',
        borderWidth:1,
        borderColor:'#e7e7e7'
    },
    buttonHadler:{
        padding:18,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#72e090',
        borderWidth:1,
        color:'#72e090'

        
    },
    bodyWrapper:{
        padding:12,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bodyContent:{
        
    },
    headerWrapper:{
        flexDirection:'row', 
        justifyContent:'center', 
        marginVertical:12
    },
    headerText:{
        fontSize: 32
    }
})

export default ToDoScreen
