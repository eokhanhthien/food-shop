import { StyleSheet, Text, View, TextInput,Button,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import type { RootState } from '../../redux-toolkit/store'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setAccessToken, setIsLogin } from '../../redux-toolkit/features/userSlice'


const Login = ({navigation}: {navigation: any}) => {
    const info:any = useSelector((state: RootState) => state.user.info)
    const access_token:any = useSelector((state: RootState) => state.user.access_token)
    const dispatch = useDispatch()


    const [uerName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [dataLogin, setDataLogin] = useState<any>({});
  
    const getLogin = async () => {
        try {
         const formData = new FormData();
         formData.append('username', uerName);
         formData.append('password', password);
         
         const response = await axios('http://apiphilh.vsmartpos.com/api/auth/login', {
           method: 'POST',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          },
           data: formData,
         });
         
        // console.log(response.data);

        if(response){
          const data = response.data;
          const userData = data.data.user;
          const access_token = data.data.access_token;
          // Lưu vào store cũng đồng thời lưu vào localstogare
          setDataLogin(data.data);
          dispatch(setUser(userData))
          dispatch(setAccessToken(access_token))
          dispatch(setIsLogin(true))

          // navigation.navigate('Home');
        }
        } catch (error) {
          console.error(error);
        }
      };
    
      
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form_login}>
          <Text style={styles.title_login}>Đăng nhập {info?.first_name || '' }</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          placeholder="Tài khoản"
          value={uerName}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Mật khẩu"
            secureTextEntry = {true}
            // keyboardType="numeric"
          />
          <View style={styles.buttons}>
            <Button
              onPress={getLogin}
              title="Đăng nhập"
              color="blue"
            />
          </View>

          <View>
            <Text style={styles.yet_account}>Bạn chưa có tài khoản đăng nhập. <Text onPress={()=>{navigation.navigate('Register')}} style={styles.dir_register}>Đăng ký</Text></Text>
          </View>

        </View> 
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
      backgroundColor: 'white',
      flex : 1,
  
    },
    content : {
      width: "100%",
      height: '50%',
      // backgroundColor : 'blue',
      marginTop: "50%",
      alignItems : "center",
      justifyContent: "center"
    },
    form_login :{
      backgroundColor: 'white',
      width : '90%',
      padding : 12,
      borderWidth: 1,
      borderRadius: 8,
      borderColor : "#ccc",
      elevation: 3,
    },
  
    input: {
      height: 40,
      marginBottom: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      borderColor : "#ccc"
    },
    title_login:{
      fontSize: 26,
      color: 'blue',
      textAlign: 'center',
      fontWeight : '500', 
      marginBottom: 24
    },
  
    buttons: {
  
    },
    yet_account :{
      marginTop : 12,
  
    },
    dir_register:{
      color: "green",
    }
  })