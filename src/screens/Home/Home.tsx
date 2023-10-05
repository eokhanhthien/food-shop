import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux-toolkit/store'
import { setUser, setAccessToken ,setIsLogin} from '../../redux-toolkit/features/userSlice'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header';

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
           <Header />
            
            <View style={styles.size_banner}>
              <Image
                source={{ uri: 'https://marketplace.canva.com/EAFVfgsKMAE/1/0/1600w/canva-black-and-yellow-simple-minimalist-burger-promotion-banner-YTqWS2eL8TM.jpg' }}
                style={styles.img_banner}
              />
            </View >

            <View style={styles.recommended}>
                <View style={styles.recommended_left}>
                  <Text style={styles.recommended_title}>Recommended</Text>
                </View>
                <View style={styles.recommended_right}>
                   <Text style={styles.see_all}>See all</Text>
                </View>
            </View>
            {/* <View style={styles.info_user}>
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
            </View> */}


        </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        flex : 1,
    
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
    },
    size_banner:{
      width: "100%",
      height : 240,
      padding: 16,
    },
    img_banner:{
      width: "100%",
      height: "100%",
      borderRadius: 24
      // aspectRatio: 1,
    },
    recommended:{
      width: "100%",
      height: 30,
      // backgroundColor: 'red',
      paddingHorizontal: 16,
      flexDirection: 'row',

    },
    recommended_left:{
      width: "80%",
      height: "100%",
      // backgroundColor: "blue"
    },
    recommended_right:{
      width: "20%",
      height: "100%",
      // backgroundColor: "green"
      alignItems: "flex-end"
    },
    recommended_title:{
      color: "black",
      fontSize: 18,
      fontWeight: "600"
    },
    see_all:{
        alignItems: "flex-end"
    }
})