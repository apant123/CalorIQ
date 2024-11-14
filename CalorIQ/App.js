import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import WelcomeScreen from './pages/welcome';
import SignUpPage from './pages/signup';
import DashboardScreen from './pages/home';
import ExperienceScreen from './pages/survey';
import EatingGoalsScreen from './pages/goals';
import AnalysisScreen from './pages/analysis';
import FoodLogScreen from './pages/foodlog';
import DiningHallScreen from './pages/dininghall';
import FoodScreen from './pages/food';
import ProfileScreen from './pages/profile';
import CameraScreen from './pages/camera';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignUpPage} />
        <Stack.Screen name="Home" component={DashboardScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
        <Stack.Screen name="Goals" component={EatingGoalsScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="FoodLog" component={FoodLogScreen} />
        <Stack.Screen name="DiningHall" component={DiningHallScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
