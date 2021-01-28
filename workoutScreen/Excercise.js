import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import styles from "../styles.js"; 
import Set from "./Set.js"; 

export default function Excercise(props) { 

    const placeHolderColor = "#a6a6a6"; 

    const [excerciseName, setExcerciseName] = useState(""); 
    const [sets, setSets] = useState(""); 

    useEffect(() => {
        setExcerciseName(props.excercise.excercise); 
        setSets(props.excercise.sets.map((set) => <Set set={set}/>)); 
    }, [])

    return (
        <View style={{padding: 15, borderWidth: 1, borderColor: "white", margin: 10}}>
            <Text>
                Name: <TextInput 
                        placeholderTextColor = {placeHolderColor}
                        style={styles.workoutTextInput}
                        placeholder={excerciseName}
                        onChange={(e) => {setExcerciseName(e.target.value)}}/>
            </Text>
            <Text>
                {sets}
            </Text>
        </View>   


    ) 
}