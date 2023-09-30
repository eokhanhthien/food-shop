import { StyleSheet, Text, View , TextInput,Button, Alert} from 'react-native'
import React ,{useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/components/Auth/Login"
import Register from "./src/components/Auth/Register"
import Home from "./src/components/Home/Home"
import { Provider,useSelector } from 'react-redux'
import store from './src/redux-toolkit/store';
import Navigation from "./src/navigation/index"

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={store}>
      <Navigation /> 
    </Provider>

  )
}

