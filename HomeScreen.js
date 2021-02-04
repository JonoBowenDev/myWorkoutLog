import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles.js"; 
import Workout from "./Workout.js"; 
import TopNavBar from "./TopNavBar.js";  
import BottomNavBar from "./BottomNavBar.js"; 
import { observer } from 'mobx-react';

import "react-native-gesture-handler"; 

import { useStores } from './RootStoreProvider';

const HomeScreen = observer(() => {

    const rootStore = useStores();

    const workoutsDisplay = rootStore.workoutList.map((workout) => <Workout workout={workout} />)

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