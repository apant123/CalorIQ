import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Image } from 'react-native-elements';

export default function FoodLogScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={{ width: 135, height: 27 }} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user-circle" size={27} color="#3F71A8" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.greeting}>FOOD LOG</Text>
      
      <View style={styles.daySelector}>
        {['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'].map((day, index) => (
          <View key={index} style={[styles.day, day === 'T' && styles.selectedDay]}>
            <Text style={day === 'T' ? styles.selectedDayText : styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.intakeText}>Today's Intake</Text>
      <Text style={styles.caloriesText}>62 + 1020 = 1082 cal</Text>

      <ScrollView contentContainerStyle={styles.mealContainer} style={{ width: '100%' }}>
        <View style={styles.mealCard}>
          <Text style={styles.mealTitle}>FEAST</Text>
          <View style={styles.mealDetails}>
            <Text style={styles.mealItem}>CHICKEN BOWL</Text>
            <Text style={styles.mealCalories}>630 CALORIES</Text>
          </View>
        </View>
        
        <View style={styles.emptyCard}></View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="camera" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15%',
    width: '100%', // Ensure it spans the entire width
    paddingHorizontal: 20, // Add padding to prevent content from touching screen edges
  },
  greeting: {
    fontSize: 30,
    marginTop: '10%',
    fontWeight: "bold"
  },
  daySelector: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  day: {
    marginHorizontal: '2%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C5D4E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#F8D446',
  },
  dayText: {
    color: '#000000',
  },
  selectedDayText: {
    color: 'black',
    fontWeight: 'bold',
  },
  intakeText: {
    alignSelf: 'flex-start',
    fontSize: 30,
    marginTop: '6%',
    marginHorizontal: '5%',
    fontWeight: "bold"
  },
  caloriesText: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: '3%',
    alignSelf: 'flex-start',
    marginHorizontal: '10%'
  },
  mealContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  mealCard: {
    width: '100%',
    backgroundColor: '#C5D4E5',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  mealTitle: {
    fontSize: 30,
  },
  mealDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  mealItem: {
    fontSize: 24,
    marginVertical: 5,
    flex: 1,
  },
  mealCalories: {
    fontSize: 20,
    color: '#606060',
    marginLeft: 10,
  },
  emptyCard: {
    width: '100%',
    backgroundColor: '#C5D4E5',
    borderRadius: 10,
    height: 150,
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#d3d3d3',
  },
  iconButton: {
    padding: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: '20%',
    width: '90%'
  },
});
