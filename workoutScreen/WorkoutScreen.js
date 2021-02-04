import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "../styles.js"; 
import TopNavBar from "../TopNavBar.js"; 
import BottomNavBar from "../BottomNavBar.js"; 
import Exercise from "./Exercise"; 

export default function WorkoutScreen({ route }) {

    const workout = route.params.workout; 
    const exerciseList = workout.exerciseList.map((exercise) => <Exercise exercise={exercise}/>);

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
                            onChange={(e) => workout.setTitle(e.target.value)}
                            placeholder={workout.title}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Start time: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={(e) => workout.setStartTime(e.target.value)}
                            placeholder={workout.startTime}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        End time: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={(e) => workout.setEndTime(e.target.value)}
                            placeholder={workout.endTime}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Notes: 
                    </Text>
                    <TextInput 
                            style={styles.workoutTextInput}
                            placeholderTextColor= {placeHolderColor}
                            onChange={(e) => workout.setNotes(e.target.value)}
                            placeholder={workout.workoutNotes}
                            />
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Excercises: 
                    </Text>
                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        {exerciseList} 
                    </Text>
                </View>
            
            
            </ScrollView>
            <BottomNavBar />
        </View>
    );
}