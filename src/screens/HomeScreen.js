import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from './SettingsScreen'
import Home from './Home'
import Report from './SettingsScreen'
import Scan from './Scan'
import Service from './Service'
import Payment from './Payment'
const Bottom = createBottomTabNavigator()
const HomeScreen = () => {
  return (
    <Bottom.Navigator>   
    <Bottom.Screen name="Home" component={Home} options={{headerShown:false, tabBarLabel:"Home", tabBarIcon:({color, size})=>(
        <Image source={require('../image/home.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
    <Bottom.Screen name="Report" component={Report} options={{headerShown:false,tabBarLabel:"Report", tabBarIcon:({color, size})=>(
        <Image source={require('../image/diagram.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
     <Bottom.Screen name="Scan" component={Scan} options={{headerShown:false,tabBarLabel:"Scan QR", tabBarIcon:({color, size})=>(
        <Image source={require('../image/qr-code.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
     <Bottom.Screen name="Service" component={Service} options={{headerShown:false,tabBarLabel:"Service", tabBarIcon:({color, size})=>(
        <Image source={require('../image/service.png')} style={{width:24, height:25,tintColor:color}}/>
    ) }} />
     <Bottom.Screen name="Payment" component={Payment} options={{headerShown:false,tabBarLabel:"Payment", tabBarIcon:({color, size})=>(
        <Image source={require('../image/wallet.png')} style={{width:24, height:24,tintColor:color}}/>
    ) }} />
  </Bottom.Navigator>
  )
}

export default HomeScreen