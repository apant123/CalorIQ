import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('feed'); // State to manage the selected tab

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

  const posts = [
    { id: '1', user: 'Sam', action: 'ate a burrito bowl at', location: 'Rende West' },
    { id: '2', user: 'Sam', action: 'ate a burrito bowl at', location: 'Rende West' },
  ];

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <FontAwesome name="user-circle-o" size={40} color="#6A0DAD" style={styles.avatar} />
      <Text style={styles.postText}>
        <Text style={styles.username}>{item.user} </Text>
        {item.action} <Text style={styles.location}>{item.location}</Text>
      </Text>
      <TouchableOpacity>
        <FontAwesome name="heart-o" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  // Function to render content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 'saved':
        return (
          <View style={styles.savedContainer}>
            <Text style={styles.savedTitle}>FEAST</Text>
            <Text style={styles.savedItem}>CHICKEN BOWL</Text>
            <Text style={styles.savedCalories}>630 CALORIES</Text>
          </View>
        );
      case 'feed':
        return (
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.feed}
          />
        );
      case 'analysis':
        return (
          <View style={styles.analysisContainer}>
            <Text style={styles.analysisTitle}>Recommended food intake</Text>
            <View style={styles.intakeContainer}>
              <TouchableOpacity style={styles.intakeItem}>
                <Text>Protein</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.intakeItem}>
                <Text>Carbs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.intakeItem}>
                <Text>Fats</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.challengesButton}>
              <Text style={styles.challengesText}>Challenges</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PROFILE</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.profileRow}>
          <FontAwesome name="user-circle-o" size={80} color="#6A0DAD" style={styles.profileIcon} />
          <View style={styles.followInfo}>
            <View style={styles.followCountContainer}>
              <Text style={styles.followText}>Followers</Text>
              <Text style={styles.followCount}>38</Text>
            </View>
            <View style={styles.followCountContainer}>
              <Text style={styles.followText}>Following</Text>
              <Text style={styles.followCount}>32</Text>
            </View>
          </View>
        </View>
        <Text style={styles.name}>{displayName}</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="share-social-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="pencil-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'saved' && styles.activeTab]} 
          onPress={() => setSelectedTab('saved')}
        >
          <Text style={[styles.tabText, selectedTab === 'saved' ? styles.activeTabText : styles.inactiveTabText]}>saved</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'feed' && styles.activeTab]} 
          onPress={() => setSelectedTab('feed')}
        >
          <Text style={[styles.tabText, selectedTab === 'feed' ? styles.activeTabText : styles.inactiveTabText]}>feed</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'analysis' && styles.activeTab]} 
          onPress={() => setSelectedTab('analysis')}
        >
          <Text style={[styles.tabText, selectedTab === 'analysis' ? styles.activeTabText : styles.inactiveTabText]}>analysis</Text>
        </TouchableOpacity>
      </View>

      {/* Render content based on the selected tab */}
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: '13%',
    justifyContent: 'space-between', // Space between items
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1, // Allow the title to take up available space
    textAlign: 'center', // Center the title text
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space out the profile icon and follow info
    width: '90%', // Make sure it takes the full width
  },
  profileIcon: {
    flex: 1, // Allow the profile icon to take up space
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
  },
  followInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 2, // Allow the follow info to take up more space
  },
  followCountContainer: {
    alignItems: 'center', // Center the text in each follow count container
    flex: 1, // Allow each count container to take equal space
  },
  followText: {
    textAlign: 'center',
    fontSize: 16,
  },
  followCount: {
    fontWeight: 'bold',
    fontSize: 18, // Make the count slightly larger
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    marginTop: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  activeTab: {
    backgroundColor: '#B0B0B0', // Gray background for the active tab
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: 'white', // White text for the active tab
  },
  inactiveTabText: {
    color: '#666', // Gray text for inactive tabs
  },
  feed: {
    paddingHorizontal: 20,
    width: '100%',
  },
  contentContainer: {
    padding: 20, // Add padding for the content area
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%', 
    alignSelf: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  postText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  username: {
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'bold',
  },
  savedContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  savedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  savedItem: {
    fontSize: 18,
    textAlign: 'center',
  },
  savedCalories: {
    fontSize: 16,
    textAlign: 'center',
  },
  analysisContainer: {
    padding: 20,
  },
  analysisTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  intakeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  intakeItem: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  challengesButton: {
    backgroundColor: '#B0B0B0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  challengesText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
