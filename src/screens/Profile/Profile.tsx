import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderNavi from '../../components/Header/HeaderNavigate';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../redux-toolkit/store'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { setUser, setAccessToken ,setIsLogin} from '../../redux-toolkit/features/userSlice'

const profile = () => {
  const dispatch = useDispatch()

  const info:any = useSelector((state: RootState) => state.user.info);
  const access_token:any = useSelector((state: RootState) => state.user.access_token)

  const handleLogout = async () => {  
    try {
 
     const response = await axios('http://apiphilh.vsmartpos.com/api/logout', {
        method: 'GET',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'multipart/form-data',
         'Authorization': `Bearer ${access_token}`, // Đặt token vào tiêu đề 'Authorization'
       },
      });
      
     logOut();
    
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = () =>{
    dispatch(setIsLogin(false))
    dispatch(setUser(null))

  }
  
  
  return (
    <View style={styles.container}>
      <HeaderNavi title="Profile" />
      <View style={styles.banner_profile}></View>
      <View style={styles.container_profile}>
        <View style={styles.content_profile}>
            <View style={styles.avatar_profile}>
                <Image  source={require('../../images/user.png')} style={styles.img}/>
            </View>
            <View style={styles.content_info}>
               <Text style={styles.text_name}>{info?info?.first_name:'' }</Text> 
               <Text style={styles.text_email}>{info?info?.email:'' }</Text> 

               <TouchableOpacity onPress={() => handleLogout()}>
               <View style={styles.item}>
                    <View  style={styles.item_left} ><Text style={styles.title_item}>Đăng xuất</Text></View>
                    <View style={styles.item_right}><Icon name="logout" style={styles.icon} ></Icon></View>
               </View>
               </TouchableOpacity>

            </View>

        </View>
      </View>
      
      
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#e5f1ef",
        flex : 1,
    
      },
    banner_profile: {
        width: "100%",
        height: 160,
        backgroundColor: 'white',
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
        // paddingHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        position: 'relative',
        zIndex: 1
    },
    content_profile:{
        width: "100%",
        height: 500,
        borderRadius: 26,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity:  0.22,
        shadowRadius: 9.22,
        elevation: 12
    },
    container_profile:{
        padding: 24,
        width: "100%",
        position: 'absolute',
        left:     0,
        top:      140,
        zIndex: 2,
    },
    avatar_profile:{
        width: 140,
        height: 140,
        backgroundColor: 'green',
        position: "absolute",
        top: -70,
        left: 100,
        borderRadius: 100,

    },
    img: {
        width: '100%',
        height: '100%',
      },
      content_info:{
        paddingTop: 80,
        paddingHorizontal: 30,
        alignItems: "center",

      },
      text_name:{
        fontSize: 22,
        fontWeight:"500"
      },
      text_email:{
        fontSize: 16,
      },
      item:{
        width: "100%",
        height : 50,
        // backgroundColor: "red",
        padding: 8,
        marginVertical: 6,
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
       flexDirection: 'row',

      },
      title_item:{
        fontSize: 16
      },
      item_left:{
        width: "80%",
        justifyContent: "center",
      },
      item_right:{
        justifyContent: "center",
        width: "20%",
        alignItems: "flex-end"
      },
      icon:{
        fontSize: 20
      }
})

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
