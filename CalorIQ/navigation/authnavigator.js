// navigation/AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../pages/welcome';
import SignUpPage from '../pages/signup'; // Adjust the path as needed
import DashboardScreen from '../pages/home';
import ExperienceScreen from '../pages/survey';
import EatingGoalsScreen from '../pages/goals';
import AnalysisScreen from '../pages/analysis';
import FoodLogScreen from '../pages/foodlog';
import DiningHallScreen from '../pages/dininghall';
import FoodScreen from '../pages/food';
import ProfileScreen from '../pages/profile';
import CameraScreen from '../pages/camera';
import LoginPage from '../pages/login';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Signup" component={SignUpPage} />
      <Stack.Screen name="Home" component={DashboardScreen} />
      <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="FoodLog" component={FoodLogScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
        <Stack.Screen name="Goals" component={EatingGoalsScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="DiningHall" component={DiningHallScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}