import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { commonStyles } from '../../assets/style';

const header = () => {
  const navigation:any = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (

    <View style={commonStyles.sidebar_top}>

      <TouchableOpacity onPress={openDrawer} style={commonStyles.container_header_left}>
        <Icon name="list-ul" style={commonStyles.icon}></Icon>
      </TouchableOpacity>

      <View style={commonStyles.container_header_mid}>
        <Text style={commonStyles.logo_text}>Food Caump</Text>
      </View>

      <View style={commonStyles.container_header_right}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image  source={require('../../images/user.png')} style={commonStyles.icon_cart}/>
      </TouchableOpacity>
      </View>



      {/* <TextInput
      style={commonStyles.input}
      placeholder="Tìm kiếm"
      />


      <Icon name="shopping-cart" style={commonStyles.icon}></Icon>
      <Icon name="wechat" style={commonStyles.icon}></Icon> */}

    </View>


  )
}

export default header

