import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import styles from "../styles.js"; 
import Set from "./Set.js"; 

export default function Exercise({ exercise }) { 

    const placeHolderColor = "#a6a6a6";  

    const sets = exercise.sets.map((set) => <Set set={set}/>)

    return (
        <View 
            style={{ 
                display: "flex", 
                padding: 10, 
                width: "95%",
                margin: 10,
                borderWidth: 1,
                borderColor: "white" }}>

            <View 
                style={{ 
                    padding: 10,
                    flexDirection: "row"}}>

                <Text style={{paddingRight: 10, color: "white", fontSize: 20}}>
                    Name:
                </Text> 

                <TextInput 
                            placeholderTextColor = {placeHolderColor}
                            style={styles.workoutTextInput}
                            placeholder={exercise.exerciseName}
                            onChange={(e) => exercise.setExerciseName(e.target.value)}/>

                
                
            </View>

            <View>
                {sets}
            </View>

        </View>

    ) 
}