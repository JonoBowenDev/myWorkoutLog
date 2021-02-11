import { useState, useEffect } from 'react';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles.js";  
import { useNavigation } from '@react-navigation/native';

export default function BottomNavBar() {

    const navigation = useNavigation(); 

    return (
        // Date   title   excercises
        <View style={styles.bottomNavBar}>

            <Text style={styles.bottomNavBarElement} onPress={() => alert("LOG!")}>
                Log
            </Text>

            <Text style={styles.bottomNavBarElement} onPress={() => alert("ROUTINES!")}>
                Routines
            </Text>

            <Text style={styles.bottomNavBarElement} onPress={() => alert("STATISTICS!")}>
                Statistics
            </Text>

            <Text style={styles.bottomNavBarElement} onPress={() => alert("PROFILE!")}>
                Profile
            </Text>

        </View>
        
    );
}