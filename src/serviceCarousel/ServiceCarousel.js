import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { serviceImage } from './serviceCarouselData'
import { useNavigation } from '@react-navigation/native';

const ServiceCarousel = () => {
 const navigation = useNavigation()
    const goToScreen =()=>{
        navigation.navigate('TimeSlot')
    }
    
    const renderItem =({item, index})=>{
        return <View style={{flex:1,flexWrap:'wrap'}} key={index}>
        <TouchableOpacity onPress={goToScreen}>
        <View style={{width:150, height:150, borderWidth:2, borderColor:"#000", borderRadius:10, marginHorizontal:8, marginTop:10}}>
        <View style={{flex:1,justifyContent:"center",alignSelf:"center",}}>
        <Image source={item.image} style={{ marginTop:8,width:100, height:100,borderRadius:50}} />
        <Text style={{fontSize:15, justifyContent:"center",alignSelf:"center"}}>{item.name}</Text>     
        </View>
        </View>
        </TouchableOpacity>
     
        
        </View>
    }
  return (
    <FlatList data={serviceImage} 
    numColumns={2}
    renderItem={renderItem} horizontal={false} pagingEnabled={true}
     
     />
  )
}

export default ServiceCarousel