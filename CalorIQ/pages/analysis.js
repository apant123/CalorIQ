import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AnalysisScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>CalorIq</Text>
        <FontAwesome name="user-circle-o" size={24} color="black" />
      </View>

      {/* Analysis Section */}
      <Text style={styles.sectionTitle}>Your analysis</Text>
      <View style={styles.analysisBox}>
        <Text style={styles.analysisText}>How we can help reach your goals:</Text>
        <TextInput style={styles.inputBox} placeholder="Your goal" />
      </View>

      {/* Recommended Food Intake */}
      <Text style={styles.sectionTitle}>Recommended food intake</Text>
      <View style={styles.foodIntakeContainer}>
        <View style={styles.foodBox}><Text style={styles.foodText}>protein</Text></View>
        <View style={styles.foodBox}><Text style={styles.foodText}>carbs</Text></View>
        <View style={styles.foodBox}><Text style={styles.foodText}>fats</Text></View>
      </View>

      {/* Challenges */}
      <View style={styles.challengesBox}>
        <Text style={styles.challengesText}>Challenges</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  analysisBox: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  analysisText: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  foodIntakeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  foodBox: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  foodText: {
    fontSize: 16,
  },
  challengesBox: {
    backgroundColor: '#a9a9a9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  challengesText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#e0e0e0',
    borderTopWidth: 1,
    borderColor: '#d3d3d3',
  },
  navButton: {
    alignItems: 'center',
  },
});
