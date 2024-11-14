import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Caloriq</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user-circle" size={24} color="purple" />
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hi ____!</Text>

      {/* Calorie Intake Card */}
      <View style={styles.calorieCard}>
        <View style={styles.calorieHeaderRow}>
            <Text style={styles.cardTitle}>Daily calorie intake</Text>
            <MaterialIcons name="insert-chart" size={24} color="black" style={styles.chartIcon} />
        </View>
        
        <View style={styles.calorieData}>
          <Text style={[styles.calories, {color: 'white'}]}>1070</Text>
          <Text style={styles.calories}>calories</Text>
          <View style={styles.nutrientContainer}>
            <View style={styles.nutrientRow}>
                <Text style={styles.nutrient}>protein</Text>
                <Text style={styles.nutrient}>carbs</Text>
                <Text style={styles.nutrient}>fats</Text>
            </View>
            <View style={styles.nutrientRow}>
                <Text style={styles.nutrientValue}>25g</Text>
                <Text style={styles.nutrientValue}>25g</Text>
                <Text style={styles.nutrientValue}>25g</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Food Score Card */}
      <View style={styles.foodScoreCard}>
        <Text style={styles.foodScoreTitle}>Food Score:</Text>
        <Text style={styles.foodScore}>Great!</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DiningHall')}>
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
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%'
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  greeting: {
    fontSize: 30,
    marginTop: '10%',
  },
  calorieCard: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20,
    marginTop: '30%',
    height: '28%'
  },
  calorieHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  calorieData: {
    marginTop: '10%',
    alignItems: 'center',
  },
  calories: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nutrientContainer: {
    width: '100%',
    marginTop: '5%',
  },
  nutrientRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '3%',
  },
  nutrient: {
    flex: 1,
    textAlign: 'center',
    color: '#666',
    fontSize: 16
  },
  nutrientValue: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },
  foodScoreCard: {
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    padding: 20,
    marginTop: '10%',
  },
  foodScoreTitle: {
    fontSize: 24,
    color: 'gray',
  },
  foodScore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: '43%'
  },
});
