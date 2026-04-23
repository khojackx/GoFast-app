import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const RideBookingScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleBookRide = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/rides/book', {
        pickupLocation,
        dropoffLocation,
      });
      Alert.alert('Success', response.data.message);
    } catch (error) {
      console.error('Error booking ride:', error);
      Alert.alert('Error', 'Failed to book ride');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Ride</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter pickup location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter dropoff location"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <Button title="Book Ride" onPress={handleBookRide} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
});

export default RideBookingScreen;
