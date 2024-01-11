import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = ({headerImage, headerTitle, onPress}) => {
    console.log(onPress)
  return (
    <View>
     <View style={{
        width:"100%",
        height:40,
        flexDirection:"row",
        alignItems:"center",
        elevation:3,
        backgroundColor:"#fff"
      }}>
         <TouchableOpacity style={{marginLeft:15}} onPress={onPress}>
           <Image style={{width:15, height:15}} source={headerImage}/>
         </TouchableOpacity>
         <Text style={{fontSize:16, fontWeight:'600', marginLeft:10}}>{headerTitle}</Text>
       
      </View>
    </View>
  )
}

export default Header