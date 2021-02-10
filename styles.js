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

    workoutScreenContainer: {
      backgroundColor: '#121111',
      alignItems: 'center',
      // height: "100%",
      height: 2000, // HOTFIX: Need to set to size of contained content 
      paddingTop: 5
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

    // Top Nav Bar styles

    topNavBar: {
      color: "#fff",
      backgroundColor: "#302b2b", 
      height: "9%", 
      width: "100%", 
      padding: 6, 
      fontSize: 20,
      paddingTop: 30, 
      flexDirection: "row", 
    },

    topNavBarBack: {
      color: "#fff",
      fontSize: 20, 
      textAlign: "left",
      marginLeft: 10
    },

    topNavBarNew: {
      color: "#fff",
      fontSize: 20, 
      textAlign: "right", 
      marginLeft: "auto", 
      marginRight: 10, 
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
      height: 40, 
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
      height: 75, 
      width: "95%"
    }
  });