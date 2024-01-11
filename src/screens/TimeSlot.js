import { View, Text, SafeAreaView, FlatList, TouchableOpacity, TextInput, Button, Alert, Modal } from 'react-native';
import React, { useState } from 'react'

const TimeSlot = () => {
    const [timeSlots, setTimeSlots] = useState([
        { id: '1', time: '10:00 AM', date: '2022-01-10', available: true },
        { id: '2', time: '11:00 AM', date: '2022-01-10', available: true },
        // Add more time slots as needed
      ]);
    
      const [selectedSlot, setSelectedSlot] = useState(null);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [isModalVisible, setModalVisible] = useState(false);
    
      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    
      const handleSlotPress = (index) => {
        if (timeSlots[index].available) {
          setSelectedSlot(timeSlots[index]);
          toggleModal();
        } else {
          Alert.alert('Slot not available');
        }
      };
    
      const handleBookAppointment = () => {
        if (name.trim() === '' || email.trim() === '') {
          Alert.alert('Please fill in all fields');
        } else {
          // Update availability status of the selected slot
          const updatedSlots = [...timeSlots];
          const index = updatedSlots.findIndex((slot) => slot.id === selectedSlot.id);
          updatedSlots[index].available = false;
          setTimeSlots(updatedSlots);
    
          // Display confirmation message
          Alert.alert('Appointment booked successfully');
    
          // Reset state and close modal
          setSelectedSlot(null);
          setName('');
          setEmail('');
          toggleModal();
        }
      };
    
      const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => handleSlotPress(index)}>
          <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>{item.time}</Text>
            <Text>{item.date}</Text>
            <Text>{item.available ? 'Available' : 'Booked'}</Text>
          </View>
        </TouchableOpacity>
      );
    
      return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Available Time Slots</Text>
          <FlatList data={timeSlots} renderItem={renderItem} keyExtractor={(item) => item.id} />
          <Modal animationType="slide" transparent={true} visible={isModalVisible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Booking Details</Text>
                <Text>Selected Time: {selectedSlot ? selectedSlot.time : ''}</Text>
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
                />
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
                />
                <Button title="Book Appointment" onPress={handleBookAppointment} />
                <Button title="Cancel" onPress={toggleModal} color="red" />
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      );
}

export default TimeSlot