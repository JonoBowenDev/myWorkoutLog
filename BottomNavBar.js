import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles.js";  

export default function BottomNavBar(props) {

    const pressHandler = () => {
        alert("YEET YEET YEET!"); 
    }

    return (
        // Date   title   excercises
        <Text style={styles.bottomNavBar} onPress={pressHandler}>
            Log     Routines      Statistics     Profile
        </Text>
        
    );
}