import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native';
import styles from "../styles.js"; 
import TopNavBar from "../TopNavBar.js"; 
import BottomNavBar from "../BottomNavBar.js"; 

export default function StatisticsScreen() {

    const placeHolderColor = "#a6a6a6"; 

    return (
        <View style={{height: "100%"}}>
            <TopNavBar />
            <ScrollView
            contentContainerStyle={styles.workoutScreenContainer}
            showsVerticalScrollIndicator={false}>

                <Text style={styles.header}>Statistics</Text>
                <Text style={{color: "white", fontSize: 15}}>Statistics go here.</Text>
            
            </ScrollView>
            <BottomNavBar />
        </View>
    );
}