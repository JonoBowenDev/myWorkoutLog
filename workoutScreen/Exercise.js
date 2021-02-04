import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import styles from "../styles.js"; 
import Set from "./Set.js"; 

export default function Exercise({ exercise }) { 

    const placeHolderColor = "#a6a6a6";  

    const sets = exercise.sets.map((set) => <Set set={set}/>)

    return (
        <View style={{padding: 15, borderWidth: 1, borderColor: "white", margin: 10}}>
            <Text>
                Name: <TextInput 
                        placeholderTextColor = {placeHolderColor}
                        style={styles.workoutTextInput}
                        placeholder={exercise.exerciseName}
                        onChange={(e) => exercise.setExerciseName(e.target.value)}/>
            </Text>
            <Text>
                {sets}
            </Text>
        </View>   


    ) 
}