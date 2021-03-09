import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from "../styles"; 
import TopNavBar from "../TopNavBar"; 
import BottomNavBar from "../BottomNavBar"; 
import { useAuth } from "../contexts/AuthContext"; 

export default function ProfileScreen() {

    const placeHolderColor = "#a6a6a6"; 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const { signUp } = useAuth(); 
    
    const signupHandler = async (e) => {
        token = await signUp(email, password); 
    }

    return (
        <View style={{height: "100%", color: "#fff"}}>
            <TopNavBar />
            <ScrollView
            contentContainerStyle={styles.workoutScreenContainer}
            showsVerticalScrollIndicator={false}>

                <Text style={styles.header}>Profile</Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View>
                    <Text 
                        style={styles.loginBtn}
                        onPress={signupHandler}>Signup</Text>
                </View>

            </ScrollView>
            <BottomNavBar />
        </View>
    );
}