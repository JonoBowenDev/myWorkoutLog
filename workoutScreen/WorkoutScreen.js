import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TextInput, Button } from 'react-native';
import styles from "../styles.js"; 
import TopNavBar from "../TopNavBar.js"; 
import BottomNavBar from "../BottomNavBar.js"; 
import Exercise from "./Exercise"; 

import DateTimePicker from '@react-native-community/datetimepicker';

export default function WorkoutScreen({ route }) {

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate); 
      };

    const workout = route.params.workout; 
    const exerciseList = workout.exerciseList.map((exercise) => <Exercise exercise={exercise}/>);

    const placeHolderColor = "#a6a6a6"; 

    return (
        <View style={{height: "100%"}}>
            <TopNavBar />
            <ScrollView
            contentContainerStyle={styles.workoutScreenContainer}
            showsVerticalScrollIndicator={false}>
            

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
                        Date: 
                    </Text>
                    <DateTimePicker 
                        testID="dateTimePicker"
                        value={workout.getStartTimeFormatted()}
                        mode="date"
                        is24Hour={true}
                        onChange={(selectedDate) => workout.setStartTime(selectedDate)}
                        style={styles.workoutTextInput}
                        display="default"
                        />

                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        Start time: 
                    </Text>
                    <DateTimePicker 
                        testID="dateTimePicker"
                        value={workout.getStartTimeFormatted()}
                        mode="time"
                        is24Hour={false}
                        onChange={(selectedTime) => workout.setStartTime(selectedTime)}
                        style={styles.workoutTextInput}
                        display="default"
                        />

                </View>

                <View style={styles.workoutView}>
                    <Text style={styles.workoutHeader}>
                        End time: 
                    </Text>
                    <DateTimePicker 
                        testID="dateTimePicker"
                        value={workout.getEndTimeFormatted()}
                        mode="time"
                        is24Hour={true}
                        onChange={(selectedTime) => workout.setStartTime(selectedTime)}
                        style={styles.workoutTextInput}
                        display="default"
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

                {exerciseList}
                {/* {exerciseList}
                {exerciseList}
                {exerciseList} */}
            
            </ScrollView>
            <BottomNavBar />
        </View>
    );
}