import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Item = (props:any) => {
  return (
    <View style={styles.item}>
    <View style={styles.image}>
        <Image  source={{ uri: props.image }} style={styles.img}></Image>
    </View>
    <View style={styles.info}>
        <Text style={styles.info_name}>{props.name}</Text>
        <Text>Nhóm: {props.type}</Text>
    </View>
    <View style={styles.price}>
        <Text style={styles.info_name}>{props.price.toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</Text> 
    </View>
  </View>
  )
}

export default Item

const styles = StyleSheet.create({
    item:{
        borderWidth: 1,
        borderRadius: 8,
        borderColor : "#ccc",
        elevation: 3,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        height: 110,
        marginBottom: 10,
        
    },
    image:{
        width: '25%', 
        // backgroundColor: 'red',
        paddingHorizontal: 2
    },
    info:{
        width: '50%',
        // backgroundColor: 'blue',
        padding: 8
    },
    info_name:{
        fontSize: 16,
        fontWeight: '600'
    },
    price:{
        width: '25%',
        // backgroundColor: 'green',
        paddingHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: '100%',
        height: '100%',
        // aspectRatio: 1,
        borderRadius: 16,
    }
})