import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import Carousel from './carousel/Carousel'
import Service from './Service'
import Header from '../component/Header'
import ServiceCarousel from '../serviceCarousel/ServiceCarousel'

const Home = ({navigation}) => {
  const handlePressed= ()=>{
    navigation.openDrawer()
  }
  return (
    <View style={{flex:1}}>
      <Header onPress={handlePressed} headerImage={require("../image/more.png")} headerTitle="Welcome to Saloonify"/>
      <Carousel />
      <ServiceCarousel/>
     
      
      
    </View>
  )
}

export default Home