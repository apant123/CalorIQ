import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DiningHallScreen() {
  const [selectedHall, setSelectedHall] = useState('feast');

  const diningHalls = ['bplate', 'de neve', 'epicuria', 'feast', 'the study'];

  const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const handleHallClick = (hall) => {
        setSelectedHall(hall)
        navigation.navigate('Camera')
    }

  return (
    <View style={styles.container}>

            <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBack}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

      <Text style={styles.header}>Dining Hall</Text>
      
      {/* Container for dining hall buttons */}
      <View style={styles.hallContainer}>
        {diningHalls.map((hall, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.hallButton,
              selectedHall === hall && styles.selectedHallButton,
            ]}
            onPress={() => handleHallClick(hall)}
          >
            <Text style={[styles.hallText, selectedHall === hall && styles.selectedHallText]}>
              {hall}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  hallContainer: {
    marginTop: '10%', // Move the container down
    width: '100%', // Optional: set width to 100% for full width
    alignItems: 'center', // Center the buttons horizontally
  },
  hallButton: {
    width: '80%',
    height: '13%', // Set a fixed height for the button
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    backgroundColor: '#C5D4E5',
    borderRadius: 10,
    marginVertical: '4%',
    paddingHorizontal: 10, // Add horizontal padding
  },
  selectedHallButton: {
    backgroundColor: '#F8D446',
  },
  hallText: {
    fontSize: 24,
    color: '#000',
    flex: 1, // Allow the text to take available space
    textAlign: 'left', // Left align the text
    marginHorizontal: '5%'
  },
  selectedHallText: {
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
},
});
