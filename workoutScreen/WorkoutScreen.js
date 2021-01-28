import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "../styles.js"; 
import TopNavBar from "../TopNavBar.js"; 
import BottomNavBar from "../BottomNavBar.js"; 
import { useNavigation } from '@react-navigation/native';
import Excercise from "./Excercise.js"; 

export default function WorkoutScreen({ route }) {
    
    const [workout, setWorkout] = useState(""); 

    const [title, setTitle] = useState(""); 
    const [startTime, setStartTime] = useState(""); 
    const [endTime, setEndTime] = useState(""); 
    const [workoutNotes, setWorkoutNotes] = useState("");
    const [excercises, setExcercises] = useState(""); 

    const navigation = useNavigation(); 

    useEffect(() => {

        const { workout } = route.params; 
        setWorkout(workout); 

        setExcercises(workout.workout.map((excercise) => <Excercise excercise={excercise}/>)); 

        setTitle(workout.title);
        setStartTime(workout.startTime); 
        setEndTime(workout.endTime); 
        setWorkoutNotes(workout.workoutNotes);

    }, [])
    
    const changeHandlerTitle = (e) => {
        setTitle(e.target.value); 
    }

    const changeHandlerStartTime = (e) => {
        setStartTime(e.target.value); 
    }

    const changeHandlerEndTime = (e) => {
        setEndTime(e.target.value); 
    }

    const changeHandlerWorkoutNotes = (e) => {
        setWorkoutNotes(e.target.value); 
    }

    const placeHolderColor = "#a6a6a6"; 

    return (
        <View>
            <TopNavBar />
            <ScrollView contentContainerStyle={styles.container}>
            

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Title: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={changeHandlerTitle}
                            placeholder={title}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Start time: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={changeHandlerStartTime}
                            placeholder={startTime}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        End time: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={changeHandlerEndTime}
                            placeholder={endTime}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Notes: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={changeHandlerWorkoutNotes}
                            placeholder={workoutNotes}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Excercises: 
                    </Text>
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        {excercises} 
                    </Text>
                </View>
            
            
            </ScrollView>
            <BottomNavBar />
        </View>
    );
}