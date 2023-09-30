import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const header = () => {
  const navigation:any = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
    <View style={styles.sidebar_top}>
    <TouchableOpacity onPress={openDrawer} style={styles.container_icon_cart_left}>
      <Image source={require('../../images/list.png')} style={styles.icon_cart_left}/>
    </TouchableOpacity>
      {/* <Text>Home {info?info.first_name:'' }</Text> */}
      <TextInput
      style={styles.input}
      placeholder="Tìm kiếm"
      />
      <Image source={require('../../images/shopping-cart.png')} style={styles.icon_cart}/>
      <Image source={require('../../images/chat.png')} style={styles.icon_cart}/>
    </View>
    </View>

  )
}

export default header

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'red',
    // flex : 1,

  },
sidebar_top : {
  backgroundColor: 'white',
  width: "100%",
  // height : 40,
  flexDirection: 'row',
  paddingVertical : 12,
  alignItems: 'center',
  justifyContent : 'center'
},
input: {
  height: 40,
  // marginBottom: 12,
  borderWidth: 1,
  padding: 10,
  borderRadius: 8,
  borderColor : "#ccc",
  width : '60%',
},
icon_cart :{
  aspectRatio: 1,
  width: '8%',
  marginLeft: 6,
},
icon_cart_left:{
  height: '100%',
  width: '80%',
  marginRight: 6,
},
container_icon_cart_left:{
    width: '10%',
    height: 30,
    alignItems: 'center',
    marginRight: 6
}
})