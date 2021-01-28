import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "./styles.js"; 
import dummyWorkoutData from "./dummyWorkoutData.js";
import Workout from "./Workout.js"; 
import TopNavBar from "./TopNavBar.js";  
import BottomNavBar from "./BottomNavBar.js"; 
import WorkoutScreen from "./workoutScreen/WorkoutScreen.js"; 

import { setupRootStore } from "./models/rootStore"; 
import { RootStoreProvider } from "./RootStoreProvider";
import { observer } from 'mobx-react';

import "react-native-gesture-handler"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from '@react-navigation/stack';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

const Stack = createStackNavigator(); 

function App() {

  // Setup the root store 
  const [rootStore, setRootStore] = useState();

  useEffect(() => {
    console.log("USE EFFECT"); 
    if (rootStore) return;
    setupRootStore()
    .then((rs) => {
      setRootStore(rs);
    })
    .catch((err) => {
      console.log("Failed to initialize root store");
      console.log(err); 
    }); 
  }, [rootStore]); 

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

  if (!rootStore) return <></>;

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

  const HomeScreen2 = observer(() => {
    return(
      <View>
        <Text>{rootStore.count}</Text>
        <Button title="increment" onPress={() => {rootStore.increaseCount()}} />
      </View>
    ); 
  }); 

  return (
    <RootStoreProvider value={rootStore}>

    <HomeScreen2 />

    {/* <NavigationContainer>

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

    </NavigationContainer> */}

    </RootStoreProvider>
    
  );
}

export default App; 

