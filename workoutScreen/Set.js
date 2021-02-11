import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native';
import styles from "../styles.js"; 

export default function Set({ set }) {

    const placeHolderColor = "#a6a6a6";

    return (
        <View style={{color: "white", borderWidth: 1, borderColor: "white", margin: 5}}>

            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={{color: "white", fontSize: 20, paddingRight: 10}}>
                    Set: 
                </Text>
                <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.setNum}
                    onChange={(e) => set.setSetNum(e.target.value)}/>
            </View>
            
            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={{color: "white", fontSize: 20, paddingRight: 10}}>
                    Weight: 
                </Text>
                <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.weight}
                    onChange={(e) => set.setWeight(e.target.value)}/>
            </View>

            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={{color: "white", fontSize: 20, paddingRight: 10}}>
                    Reps:  
                </Text>
                <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.reps}
                    onChange={(e) => set.setReps(e.target.value)}/>
            </View>

            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={{color: "white", fontSize: 20, paddingRight: 10}}>
                    Rep range: 
                </Text>
                <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.repRange}
                    onChange={(e) => set.setRepRange(e.target.value)}/>
            </View>

            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={{color: "white", fontSize: 20, paddingRight: 10}}>
                    Tempo:  
                </Text>
                <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.tempo}
                    onChange={(e) => set.setTempo(e.target.value)}/>
            </View>

            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={{color: "white", fontSize: 20, paddingRight: 10}}>
                    Notes:  
                </Text>
                <TextInput 
                    placeholderTextColor={placeHolderColor}
                    style={styles.workoutTextInput}
                    placeholder={set.notes}
                    onChange={(e) => set.setNotes(e.target.value)}/>
            </View>
                
        </View>
    )
}