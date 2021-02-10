import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles.js";  
import { useNavigation } from '@react-navigation/native';

export default function TopNavBar() {

    const navigation = useNavigation(); 

    return (
        // Date   title   excercises
        <View style={styles.topNavBar}>
        <Text style={styles.topNavBarBack} onPress={ navigation.goBack }>
            Back
        </Text>
        <Text style={styles.topNavBarNew} onPress={ () => alert("NEW WORKOUT") }>
            + New Workout
        </Text>
        </View>
        
    );
}