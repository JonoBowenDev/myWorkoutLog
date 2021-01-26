import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles.js";  
import { useNavigation } from '@react-navigation/native';

export default function TopNavBar() {

    const navigation = useNavigation(); 

    const pressHandler = () => {
        navigation.goBack();  
    }

    return (
        // Date   title   excercises
        <Text style={styles.topNavBar} onPress={pressHandler}>
            Back                                      + new workout
        </Text>
        
    );
}