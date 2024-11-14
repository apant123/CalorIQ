import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

const FoodScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { imageUri } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
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

      {/* Image Display */}
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.imagePlaceholder} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      {/* Food Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Chicken Bowl</Text>
          <Icon name="bookmark-border" type="material" color="#000" />
        </View>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Rating
            imageSize={20}
            readonly
            startingValue={3.5}
            style={styles.rating}
          />
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>fried</Text>
          <Text style={styles.tag}>macros</Text>
          <Text style={styles.tag}>contains wheat</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <Text style={[styles.tab, styles.activeTab]}>portion</Text>
          <Text style={styles.tab}>ingredients</Text>
        </View>

        {/* AR Portion Control */}
        <View style={styles.arContainer}>
          <Text style={styles.arText}>ar recommended portion control</Text>
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
    left: 16,
  },
  headerTextContainer: {
    backgroundColor: '#d1cbc7',
    padding: 8,
    borderRadius: 10,
    width: '50%',
    marginTop: '15%',
  },
  headerTitle: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
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
    fontSize: 24,
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
    backgroundColor: '#d1cbc7',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: '#000',
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  },
  activeTab: {
    backgroundColor: '#d1cbc7',
    borderRadius: 8,
  },
  arContainer: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
  },
  arText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
});

export default FoodScreen;
