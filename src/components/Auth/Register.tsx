import { StyleSheet, Text, View, TextInput,Button,Alert} from 'react-native'
import React,{useState} from 'react'

const Register = ({navigation}: {navigation: any}) => {

    const [uerName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
  
    const onPressLearnMore = () =>{
      Alert.alert('Alert uerName', uerName)
      Alert.alert('Alert password', password)
    }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form_login}>
          <Text style={styles.title_login}>Đăng ký</Text>
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

        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            // value={password}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry = {true}
            // keyboardType="numeric"
          />

          <View style={styles.buttons}>
            <Button
              onPress={onPressLearnMore}
              title="Đăng ký"
              color="blue"
            />
          </View>

          <View>
            <Text style={styles.yet_account}>Bạn đã có tài khoản. <Text onPress={()=>{navigation.navigate('Login')}} style={styles.dir_register}>Đăng nhập</Text></Text>
          </View>

        </View>
      </View>
    </View>
  )
}

export default Register

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