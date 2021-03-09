import { useState, useEffect } from 'react';
import React from 'react';
import WorkoutScreen from "./workoutScreen/WorkoutScreen"; 
import HomeScreen from "./HomeScreen"; 
import RoutinesScreen from "./RoutinesScreen/RoutinesScreen"; 
import StatisticsScreen from "./StatisticsScreen/StatisticsScreen"; 
import ProfileScreen from "./ProfileScreen/ProfileScreen"; 

import { setupRootStore } from "./models/rootStore"; 
import { RootStoreProvider } from "./RootStoreProvider";
import "react-native-gesture-handler"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from "./contexts/AuthContext"; 

const Stack = createStackNavigator(); 

function App() {

  // Setup the root store 
  const [rootStore, setRootStore] = useState();

  useEffect(() => { 
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

  if (!rootStore) return <></>;

  return (
    <RootStoreProvider value={rootStore}>
    {/* <AuthProvider> */}

    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{title: "Profile Screen"}}
        />

        <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{title: "Home Screen"}}
        />

        <Stack.Screen
        name="Workout Screen"
        component={WorkoutScreen}
        options={{title: "Workout Screen"}}
        />

        <Stack.Screen
        name="Routines Screen"
        component={RoutinesScreen}
        options={{title: "Routines Screen"}}
        />

        <Stack.Screen
        name="Statistics Screen"
        component={StatisticsScreen}
        options={{title: "Statistics Screen"}}
        />

        
        

      </Stack.Navigator>

    </NavigationContainer>

    {/* </AuthProvider> */}
    </RootStoreProvider>
    
  );
}

export default App; 

