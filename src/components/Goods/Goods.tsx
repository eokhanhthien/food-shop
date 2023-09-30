import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import navigation from '../../navigation';
import Header from '../Header/Header';
import Item from './Item'

const goods = () => {
  
  return (
    <View style={styles.container}>
     <Header />
     <ScrollView>
        <View style={styles.list_products}>
          <Item />
  
         
       
        </View>
     </ScrollView>
    </View>
    
  )
}

export default goods

const styles = StyleSheet.create({
    container :{
        padding : 14,
        backgroundColor:'white',
        height: '100%',

    },
    list_products:{
    },
   
})