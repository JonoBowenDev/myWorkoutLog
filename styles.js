import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
      color: "#fff",
      fontSize: 30, 
      paddingTop: 10
    }, 
    
    container: {
      backgroundColor: '#121111',
      alignItems: 'center',
      height: "100%" 
    },

    mainContainer: {
      paddingTop: 100 
    }, 

    topLevelWorkout: {
      color: "#fff",
      margin: 10,
      fontWeight: "bold",
      fontSize: 20, 
      backgroundColor: "#2a2b2a",
      width: "70%",
    },

    topLevelWorkoutTitle: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 20,  
      backgroundColor: "#353835", 
      padding: 5,
      textAlign: "center", 
    },

    topLevelExcercises: {
      color: "#fff",
      fontSize: 10, 
      padding: 5,  
      textAlign: "center", 
    },
  
    topNavBar: {
      color: "#fff",
      backgroundColor: "#302b2b", 
      height: "9%", 
      width: "100%", 
      padding: 6,
      textAlign: "right", 
      fontSize: 20,
      paddingTop: 30
    },

    bottomNavBar: {
      color: "#fff",
      backgroundColor: "#302b2b", 
      height: "9%", 
      width: "100%", 
      padding: 10,
      textAlign: "center", 
      fontSize: 20, 
      position: "absolute", 
      bottom: 0,
      paddingBottom: 10
    },

    

    // Workout Screen styles
    workoutTextInput: {
      flex: 1.5, 
      // justifyContent: "flex-start", 
      height: "80%", 
      backgroundColor: "#302b2b", 
      fontSize: 20, 
      color: "#ffffff", 
      padding: 10 
    }, 

    workoutHeader: {
      flex: 1, 
      // justifyContent: "flex-start", 
      fontSize: 25, 
      color: "#fff"
    },
    
    workoutView: {
      flexDirection: "row", 
      padding: 10, 
      height: "10%", 
      width: "95%"
    }
  });