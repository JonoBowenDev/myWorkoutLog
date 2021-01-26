import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "./styles.js";   
import { useNavigation } from '@react-navigation/native';

export default function Workout(props) {

    const navigator = useNavigation(); 

    const date = props.workout.startTime; 
    const title = props.workout.title;

    // Build excercise list
    const excercises = [];   
    for (let i=0; i < props.workout.workout.length; i++) {
        excercises.push(`${props.workout.workout[i].excercise}, `);  
    } 

    const goToWorkout = () => {
        navigator.navigate("Workout Screen", {
            workout: props.workout
        });  
    }

    return (
        
        <View style={styles.topLevelWorkout}>
            
            <Text 
            style={styles.topLevelWorkoutTitle}
            onPress={goToWorkout}>
                {date} - {title}
            </Text>

            <Text 
            style={styles.topLevelExcercises}
            onPress={goToWorkout}>
                {excercises}
            </Text>

        </View>
        
    );
}


