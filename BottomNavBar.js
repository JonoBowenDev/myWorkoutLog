import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles.js";  
import { useNavigation } from '@react-navigation/native';

export default function BottomNavBar() {

    const navigator = useNavigation(); 

    return (
        // Date   title   excercises
        <View style={styles.bottomNavBar}>

            <Text style={styles.bottomNavBarElement} onPress={() => navigator.navigate("Home Screen")}>
                Log
            </Text>

            <Text style={styles.bottomNavBarElement} onPress={() => navigator.navigate("Routines Screen")}>
                Routines
            </Text>

            <Text style={styles.bottomNavBarElement} onPress={() => navigator.navigate("Statistics Screen")}>
                Statistics
            </Text>

            <Text style={styles.bottomNavBarElement} onPress={() => navigator.navigate("Profile Screen")}>
                Profile
            </Text>

        </View>
        
    );
}