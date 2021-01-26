import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "./styles.js"; 
import dummyWorkoutData from "./dummyWorkoutData.js";
import Workout from "./Workout.js"; 
import TopNavBar from "./TopNavBar.js";  
import BottomNavBar from "./BottomNavBar.js"; 
import WorkoutScreen from "./WorkoutScreen.js"; 

import "react-native-gesture-handler"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from '@react-navigation/stack';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

const Stack = createStackNavigator(); 

export default function App() {

  const [workouts, setWorkouts] = useState(null); 
  const [workoutsFetched, setWorkoutsFetched] = useState(false);
  const [workoutsList, setWorkoutsList] = useState(null);  

  async function fetchWorkouts() {
    await setWorkouts(dummyWorkoutData);  
  }

  if (!workoutsFetched) {
    fetchWorkouts();  
    setWorkoutsFetched(true); 
  }

  if (workouts != null && workoutsList == null) {
    const list = workouts.map((workout) => <Workout workout={workout} />)
    setWorkoutsList(list); 
  }

  // HOME SCREEN COMPONENT (will become it's own file) 
  function HomeScreen() {
    return(
      <View style={styles.container}>
        <TopNavBar />
        <Text style={styles.header}>Log</Text>
        {workoutsList}
        <BottomNavBar />
      </View>
    ); 
  }

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{title: "Home screen"}}
        />

        <Stack.Screen
        name="Workout Screen"
        component={WorkoutScreen}
        options={{title: "Workout Screen"}}
        />

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}


