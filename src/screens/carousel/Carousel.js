import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ImageData } from './ImageData'

const Carousel = () => {
    const width = Dimensions.get("window").width
    const [activeindex, setActiveIndex] = useState(0)
    const flatlistRef = useRef()
  
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       if (activeindex === ImageData.length - 1) {
    //         flatlistRef.current.scrollToIndex({
    //           index: 0,
    //           animated: true,
    //         });
    //       } else {
    //         flatlistRef.current.scrollToIndex({
    //           index: activeindex + 1,
    //           animated: true,
    //         });
    //       }
    //     }, 5000); // Change the interval as needed
      
    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(intervalId);
    //   }, [activeindex, ImageData.length, flatlistRef]);
      
    const getItemLayout =(data, index)=>({
        length:width,
        offset:width*index,
        index:index
    })

    const renderItem =( {item, index})=>{
        return <View style={{flex:1}} key={index}>
                <Image source={item.image} style={{width:width, height:200,}} /></View>
        
    }
    const renderDotIndicators=()=>{
       
       return(
        ImageData.map((dot, index)=>{
            if(activeindex===index){
             return <View key={index} style={{backgroundColor:"#000", height:10, width:10,marginHorizontal:5, borderRadius:5}}>

             </View>
            }
            else{
                return <View key={index} style={{backgroundColor:"#b8b1b0", height:10, width:10,marginHorizontal:5, borderRadius:5}}>

                </View>

            }
           
        })
       )
    }
    const handleScroll =(event)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x
       //index of current position
       const index = Math.floor(scrollPosition/width)
       setActiveIndex(index)
    }
  return (
    <View>
      <FlatList data={ImageData} 
      ref={flatlistRef}
      getItemLayout={getItemLayout}
      renderItem={renderItem} horizontal={true} pagingEnabled={true}
       onScroll={handleScroll}
       keyExtractor={(item)=>item.id}
       
       />
      <View style={{ flexDirection:"row",justifyContent:"center", marginTop:6}}>
      {renderDotIndicators()}
      </View>
      
    </View>
  )
}

export default Carousel