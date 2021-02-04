import { useState, useEffect } from 'react';
import React from 'react';
import WorkoutScreen from "./workoutScreen/WorkoutScreen.js"; 
import HomeScreen from "./HomeScreen"; 
import { setupRootStore } from "./models/rootStore"; 
import { RootStoreProvider } from "./RootStoreProvider";
import "react-native-gesture-handler"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from '@react-navigation/stack';

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

    </RootStoreProvider>
    
  );
}

export default App; 

