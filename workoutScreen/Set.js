import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import styles from "../styles.js"; 

export default function Set(props) {

    const placeHolderColor = "#a6a6a6";

    const [setNum, setSetNum] = useState(""); 
    const [weight, setWeight] = useState(""); 
    const [reps, setReps] = useState(""); 
    const [repRange, setRepRange] = useState("");
    const [tempo, setTempo] = useState(""); 
    const [notes, setNotes] = useState(""); 

    useEffect(() => {
        setSetNum(props.set.set);
        setWeight(props.set.weight);
        setReps(props.set.reps);
        setRepRange(props.set.repRange);
        setTempo(props.set.tempo);
        setNotes(props.set.notes);

    }, [])

    return (
        <View style={{padding: 10}}>
            <Text style={{padding: 5}}>
                Set: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={setNum}
                    onChange={(e) => {setSetNum(e.target.value)}}/>
            </Text>
            <Text style={{padding: 5}}>
                Weight: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={weight}
                    onChange={(e) => {setWeight(e.target.value)}}/> 
            </Text>
            <Text style={{padding: 5}}>
                Reps: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={reps}
                    onChange={(e) => {setReps(e.target.value)}}/> 
            </Text>
            <Text style={{padding: 5}}>
                Rep Range: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={repRange}
                    onChange={(e) => {setRepRange(e.target.value)}}/>
            </Text>
            <Text style={{padding: 5}}>
                Tempo: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={tempo}
                    onChange={(e) => {setTempo(e.target.value)}}/> 
            </Text>
            <Text style={{padding: 5}}>
                Notes: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={notes}
                    onChange={(e) => {setNotes(e.target.value)}}/>
            </Text>
        </View>
    )
}