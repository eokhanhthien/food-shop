import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const drawer = () => {
  const navigation:any = useNavigation();
    
  return (
    <View style={styles.container}>
      <Text style={styles.draw_item} onPress={()=>{navigation.navigate('Home')}}><Icon name="home" style={styles.icon}></Icon> Trang chủ </Text>
      <Text style={styles.draw_item} onPress={()=>{navigation.navigate('Goods')}}><Icon name="dropbox" style={styles.icon}></Icon> Hàng hóa</Text>


    </View>
  )
}

export default drawer

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex : 1,
        padding:20
    },
    draw_item:{
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 6,
        padding: 8,
        fontWeight: '400',
        fontSize: 18
    },
    icon:{
        fontSize: 20
    }
})