import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import navigation from '../../navigation/Navigation';
import Header from '../../components/Header/Header';
import HeaderNavi from '../../components/Header/HeaderNavigate';
import Item from './Item'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux-toolkit/store';

const goods = () => {
  const access_token:any = useSelector((state: RootState) => state.user.access_token)
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {

      const response = await axios('http://apiphilh.vsmartpos.com/api/products?per_page=10', {
        method: 'GET',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'multipart/form-data',
         'Authorization': `Bearer ${access_token}`, // Đặt token vào tiêu đề 'Authorization'
       },
      });

      // Xử lý dữ liệu response ở đây
      
      if(response.data){
        setProducts(response.data.data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  },[]);
  
  console.log(products);
  
  return (
    <>
    <HeaderNavi title="Products" />
    <View style={styles.container}>
     
     <ScrollView>
        <View style={styles.list_products}>
          {products && products?.map((item:any, index) => (
            <Item  
            key={index} 
            name={item.name} 
            price={item.price}
            image={item.image_url}
            type={item.product_type.name}
            />      
          ))
          }
       
        </View>
     </ScrollView>
    </View>
    </>
  )
}

export default goods

const styles = StyleSheet.create({
    container :{
        padding : 16,
        backgroundColor:'white',
        height: '100%',

    },
    list_products:{
      paddingBottom: 100
    },
   
})