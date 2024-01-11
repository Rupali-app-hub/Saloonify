import React from 'react'
import Splash from './screens/Splash'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from './screens/MainScreen'
import Service from './screens/Service'
import TimeSlot from './screens/TimeSlot'
const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash"  component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="MainScreen"  component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="TimeSlot"  component={TimeSlot} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator