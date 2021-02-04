import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import styles from "../styles.js"; 

export default function Set({ set }) {

    const placeHolderColor = "#a6a6a6";

    return (
        <View style={{padding: 10}}>
            <Text style={{padding: 5}}>
                Set: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.setNum}
                    onChange={(e) => set.setSetNum(e.target.value)}/>
            </Text>
            <Text style={{padding: 5}}>
                Weight: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.weight}
                    onChange={(e) => {set.setWeight(e.target.value)}}/> 
            </Text>
            <Text style={{padding: 5}}>
                Reps: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.reps}
                    onChange={(e) => {set.setReps(e.target.value)}}/> 
            </Text>
            <Text style={{padding: 5}}>
                Rep Range: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.repRange}
                    onChange={(e) => {set.setRepRange(e.target.value)}}/>
            </Text>
            <Text style={{padding: 5}}>
                Tempo: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.tempo}
                    onChange={(e) => {set.setTempo(e.target.value)}}/> 
            </Text>
            <Text style={{padding: 5}}>
                Notes: <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.notes}
                    onChange={(e) => {set.setNotes(e.target.value)}}/>
            </Text>
        </View>
    )
}