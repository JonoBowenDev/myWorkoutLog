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

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
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
                        value={date}
                        mode="date"
                        is24Hour={true}
                        onChange={onChange}
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
                        value={date}
                        mode="time"
                        is24Hour={false}
                        onChange={onChange}
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
                        value={date}
                        mode="time"
                        is24Hour={true}
                        onChange={onChange}
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