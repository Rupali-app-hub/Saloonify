import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import { ServiceData } from './serviceData/serviceData';
import Header from '../component/Header';
import { useNavigation } from '@react-navigation/native';

const Service = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(ServiceData);

  const goBack = () => {
    navigation.goBack();
  };

  const deleteItem = (index) => {
    // Create a copy of the data array
    const newData = [...data];
    // Remove the item at the specified index
    newData.splice(index, 1);
    // Update the state to trigger a re-render
    setData(newData);
  };

  const renderItem = ({ item, index }) => (
    <View style={{ margin: 8 }}>
      <View style={{ borderColor: '#d5dfed', borderWidth: 2 }}>
        <View style={{ marginLeft: 8 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.servicename}</Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => deleteItem(index)}>
                <Image source={require('../image/delete.png')} style={{ width: 20, height: 20, margin: 5 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <Text style={{ fontWeight: 'normal', fontSize: 14 }}>{item.desciption}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View>
              <Text>Money</Text>
            </View>
            <View style={{ marginLeft: '40%' }}>
              <Text>Time</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header headerImage={require('../image/arrow.png')} headerTitle={'Add service to package'} onPress={goBack} />
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Service;
