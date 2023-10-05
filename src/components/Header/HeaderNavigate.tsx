import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../assets/style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const HeaderNavigate = (props:any) => {
    const navigate = useNavigation();
  return (
    <View style={commonStyles.sidebar_top}>

        <TouchableOpacity  onPress={() => navigate.goBack()} style={commonStyles.container_header_left}>
            <Icon name="chevron-back-outline" style={commonStyles.icon}></Icon>
        </TouchableOpacity>

        <View style={commonStyles.container_header_mid}>
        <Text style={commonStyles.logo_text}>{props.title}</Text>
        </View>

        <View style={commonStyles.container_header_right}>
    
        </View>
    </View>

  )
}

export default HeaderNavigate

const styles = StyleSheet.create({})