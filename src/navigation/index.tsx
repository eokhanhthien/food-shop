// Import các thư viện cần thiết
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import type { RootState } from '../../src/redux-toolkit/store';

// Import các thành phần của bạn
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Home from '../components/Home/Home';
import Draw from '../components/Home/Draw';
import DrawerContent from '../components/Drawer/Drawer';

import Goods from '../components/Goods/Goods';


import Icon from 'react-native-vector-icons/FontAwesome';

// Tạo Stack Navigation
const Stack = createNativeStackNavigator();

// Tạo Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Tạo Drawer Navigation
const Drawer = createDrawerNavigator();

// Một màn hình trong Tab Navigation
const HomeScreen = () => <Home />;
// Một màn hình trong Goods Navigation
const Goodscreen = () => <Goods />;

// Một màn hình trong Drawer Navigation
const DrawScreen = () => <Draw />;

// Màn hình đăng nhập và đăng ký
const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Goods" component={Goodscreen} />
    {/* Các màn hình khác trong Stack nếu cần */}
  </Stack.Navigator>
);


// Màn hình chính của ứng dụng (bao gồm Home và Draw)
const MainApp = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="HomeTab" component={HomeStackScreen} 
     options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" color={color} size={size} />
      ),
    }}
    />
    <Tab.Screen name="Drawer" component={DrawScreen} 
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
    />
  </Tab.Navigator>
);

const CustomDrawerContent = () => {
  // Thay vì hiển thị tiêu đề "MainApp"
  return (
    <DrawerContent/>
  );
};

// Ứng dụng chính với Drawer Navigation cho MainApp và Stack Navigation cho Auth
const App = () => {
  const isLogin: any = useSelector((state: RootState) => state.user.isLogin);
  console.log('đăng nhập', isLogin);

  return (
    <NavigationContainer>
      {isLogin ? (
        <Drawer.Navigator initialRouteName="Trang chủ" screenOptions={{ headerShown: false }}  drawerContent={CustomDrawerContent}>
          <Drawer.Screen name="Trang chủ" component={HomeStackScreen} />
          <Drawer.Screen name="Hàng hóa" component={HomeStackScreen} />
          {/* <Drawer.Screen name="Hàng hóa" component={MainApp} /> */}
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default App;
