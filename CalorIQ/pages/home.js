import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Image } from 'react-native-elements';


export default function DashboardScreen() {

  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("Guest");

  const fetchDisplayName = async () => {
    const user = auth.currentUser; // Get the signed-in user
    if (user) {
        const userDocRef = doc(db, "users", user.uid); // Reference Firestore document
        try {
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                const displayName = userDoc.data().displayName;
                console.log("Display Name:", displayName);
                return displayName; // Use this value to render in the UI
            } else {
                console.log("No such document in Firestore.");
                return "Guest"; // Fallback if no display name is set
            }
        } catch (error) {
            console.error("Error fetching display name:", error.message);
        }
    } else {
        console.error("No user is signed in.");
        return "Guest";
    }
  };

  useEffect(() => {
    const getDisplayName = async () => {
        const name = await fetchDisplayName();
        setDisplayName(name);
    };
    getDisplayName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={{ width: 135, height: 27 }} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user-circle" size={27} color="#3F71A8" />
        </TouchableOpacity>
      </View>

      <Text style={styles.greeting}>Hi {displayName}!</Text>

      <View style={styles.calorieCard}>
        <View style={styles.calorieHeaderRow}>
            <Text style={styles.cardTitle}>Daily calorie intake</Text>
            <MaterialIcons name="insert-chart" size={24} color="#3F71A8" style={styles.chartIcon} />
        </View>
        
        <View style={styles.calorieData}>
          <Text style={[styles.calories, {color: '#3F71A8', fontWeight: "bold", fontSize: 30}]}>1813</Text>
          <Text style={[styles.calories, {fontSize: 28}]}>calories</Text>
          <View style={styles.nutrientContainer}>
            <View style={styles.nutrientRow}>
                <Text style={styles.nutrient}>protein</Text>
                <Text style={styles.nutrient}>carbs</Text>
                <Text style={styles.nutrient}>fats</Text>
            </View>
            <View style={styles.nutrientRow}>
                <Text style={styles.nutrientValue}>76g</Text>
                <Text style={styles.nutrientValue}>127g</Text>
                <Text style={styles.nutrientValue}>32g</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.foodScoreCard}>
        <Text style={styles.foodScoreTitle}>Food Score:</Text>
        <Text style={styles.foodScore}>Great!</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="home-outline" size={40} color="#3F71A8" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DiningHall')}>
          <MaterialCommunityIcons name="camera-outline" size={40} color="#3F71A8" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FoodLog')}>
          <MaterialCommunityIcons name="plus-outline" size={40} color="#3F71A8" />
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
    backgroundColor: '#C5D4E5',
    borderRadius: 10,
    padding: 20,
    marginTop: '15%',
    height: '35%'
  },
  calorieHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  calorieData: {
    marginTop: '10%',
    alignItems: 'center',
  },
  calories: {
    fontSize: 24,
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
    color: '#000000',
    fontSize: 20,
    fontWeight: "bold",
  },
  nutrientValue: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20
  },
  foodScoreCard: {
    backgroundColor: '#FDF1C2',
    borderRadius: 10,
    padding: 20,
    height: "15%",
    marginTop: '10%',
  },
  foodScoreTitle: {
    fontSize: 30,
    color: 'black',
  },
  foodScore: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: '5%',
    color: "#FAD856"
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: '35%'
  },
});
