import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux-toolkit/store'
import { setUser, setAccessToken ,setIsLogin} from '../../redux-toolkit/features/userSlice'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const info:any = useSelector((state: RootState) => state.user.info)
  const access_token:any = useSelector((state: RootState) => state.user.access_token)

  const dispatch = useDispatch()

  const logOut = () =>{
    console.log(access_token);
    dispatch(setUser({}))
    dispatch(setIsLogin(false))
  }

  const handleLogout = async () => {
    try {
     const api = axios.create({
       baseURL: 'http://apiphilh.vsmartpos.com/api/logout',
       headers: {
         'Content-Type': 'application/json',
       },
     });
     
     const token = access_token; 
     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     
     logOut();
    
    } catch (error) {
      console.error(error);
    }
  };

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
            
            <View style={styles.info_user}>
              <View style={styles.avatar}>
                <Image source={require('../../images/user.png')} style={styles.icon_cart}/>

              </View>
              <View style={styles.info}>
                <Text style={styles.info_text}>{info?info?.first_name:'' }</Text>
                <Text style={styles.info_text}>{info?info?.email:'' }</Text>
              </View>
              <View style={styles.logout}>
                  <View
                    style={styles.button} 
                  >
                   <Text  style={styles.button_text} onPress={handleLogout}>Đăng xuất</Text>
                   </View>
              </View>
            </View>
        </View>
  )
}

export default Home

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
    info_user: {
      backgroundColor: 'white',
      width: "100%",
      // height : 40,
      flexDirection: 'row',
      padding : 12,
      alignItems: 'center',
      justifyContent : 'center',
    },
    avatar:{
      width: '20%',
      // height : 40,
      // backgroundColor: 'white',
      borderRadius: 50,
      overflow : 'hidden',
      aspectRatio: 1,
      marginRight: 10

    },
    info: {
      width : '50%',
      // backgroundColor: 'blue',

    },
    info_text:{
      fontSize: 16,
      marginBottom: 4
    },
    logout:{
      width: '30%',
      backgroundColor:'blue',
      borderRadius: 4,
    },
    button:{

      width: '100%',
      padding: 4,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    button_text:{
      color: 'white'
    },
    container_icon_cart_left:{
      width: '10%',
      height: 30,
      alignItems: 'center',
      marginRight: 6
    }
})