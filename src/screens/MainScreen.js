import React from 'react'
import HomeScreen from './HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Sidebar from './Sidebar'
const Drawer = createDrawerNavigator()

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props=> <Sidebar {...props}/>}> 
     <Drawer.Screen name='HomeScreen'  component={HomeScreen} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default MainScreen