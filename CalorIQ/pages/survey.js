import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExperienceScreen() {
  const navigation = useNavigation();
  const [selectedButtons, setSelectedButtons] = useState({});

  const toggleButton = (id) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Goals')}
      >
        <Text style={styles.skipText}>skip</Text>
      </TouchableOpacity>
      <Text style={styles.questionText}>what do you want to get out of this experience?</Text>
      
      <View style={styles.buttonContainer}>
        {[...Array(18)].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.button,
              selectedButtons[i] && styles.selectedButton,
            ]}
            onPress={() => toggleButton(i)}
          />
        ))}
      </View>
      
      <TouchableOpacity style={styles.nextButton}>
        <Text 
            style={styles.nextButtonText}
            onPress={() => navigation.navigate('Goals')}>
            next
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    padding: 20,
  },
  skipText: {
    alignSelf: 'flex-end',
    marginTop: '10%',
    fontSize: 20,
    color: '#000',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%'
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff', // white background for unselected state
    margin: 10,
  },
  selectedButton: {
    backgroundColor: '#A9A9A9', // darker gray for selected state
  },
  nextButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: '20%',
    width: '35%',
    alignSelf: 'center',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});
