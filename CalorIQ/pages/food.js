import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

const FoodScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imageUri } = route.params;
  const [activeTab, setActiveTab] = useState('portion');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="arrow-back" type="material" color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>FEAST</Text>
        </View>
      </View>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.imagePlaceholder} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Beef Bowl</Text>
          <Icon name="bookmark-border" type="material" size={30} color="#3F71A8" />
        </View>

        <View style={styles.ratingContainer}>
          <Rating
            imageSize={30}
            readonly
            startingValue={4}
            style={styles.rating}
          />
        </View>

        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>fried</Text>
          <Text style={styles.tag}>macros</Text>
          <Text style={styles.tag}>contains wheat</Text>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'portion' ? styles.activeTab : null]}
            onPress={() => handleTabChange('portion')}
          >
            <Text style={styles.tabText}>portion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'ingredients' ? styles.activeTab : null]}
            onPress={() => handleTabChange('ingredients')}
          >
            <Text style={styles.tabText}>ingredients</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.arContainer}>
          <View style={styles.whiteBox}>
            <Text style={styles.blackText}>
              {activeTab === 'portion'
                ? 'To stay on track, eat 3/4 of the plate'
                : 'Beef, Rice, Spring Onions, Gravy'}
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 75,
    left: 16,
  },
  headerTextContainer: {
    padding: 8,
    borderRadius: 10,
    width: '50%',
    marginTop: '15%',
  },
  headerTitle: {
    fontSize: 30,
    color: '#3F71A8',
    textAlign: 'center',
    fontWeight: "bold"
  },
  imagePlaceholder: {
    height: '40%',
    backgroundColor: '#d3d3d3',
  },
  detailsContainer: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  ratingContainer: {
    alignItems: 'flex-start',
  },
  rating: {
    marginVertical: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  tag: {
    backgroundColor: '#FDF1C0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: '#000',
    textAlign: 'center', // Centers the text horizontally
    alignSelf: 'flex-start', // Ensures tags size to fit their content
    height: '60%',
    width: '31%'
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  tab: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#000',
    backgroundColor: '#C5D4E5',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#3F71A8',
    borderRadius: 8,
  },
  arContainer: {
    backgroundColor: '#3F71A8',
    padding: 16,
    borderRadius: 10,
    height: '26%'
  },
  arText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#FFFFFF',
    height: '20%'
  },
  whiteBox: {
    backgroundColor: '#FFFFFF', // White background
    padding: 16, // Padding for spacing inside the box
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Optional: Adds shadow for better visibility
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android shadow
    alignItems: 'center', // Centers the text horizontally
    justifyContent: 'center', // Centers the text vertically
    height: '100%'
  },
  blackText: {
    fontSize: 16,
    color: '#000000', // Black text color
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: "italic"
  },
  
});

export default FoodScreen;
