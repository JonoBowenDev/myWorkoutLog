import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "./styles.js"; 
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

import { useStores } from './RootStoreProvider';

const HomeScreen = observer(() => {

    const rootStore= useStores();

    const [workoutsDisplay, setWorkoutsDisplay] = useState("Loading...");  

    if (workoutsDisplay == "Loading...") {
        const list = rootStore.workoutList.map((workout) => <Workout workout={workout} />)
        setWorkoutsDisplay(list); 
    }

    return(
      <View style={styles.container}>
        <TopNavBar />
        <Text style={styles.header}>Log</Text>
        {workoutsDisplay}
        <BottomNavBar />
      </View>
    ); 
  }); 

  export default HomeScreen; 