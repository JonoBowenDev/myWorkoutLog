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
      height: 3000, // HOTFIX: Need to set to size of contained content 
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
      height: "12%",  
      width: "100%", 
      padding: 6, 
      fontSize: 20,
      paddingTop: 45, 
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
      height: "10%", 
      width: "100%", 
      padding: 10,
      paddingLeft: 25, 
      textAlign: "center", 
      alignItems: "center",  
      alignContent: "center", 
      position: "absolute", 
      bottom: 0, 
      flexDirection: "row"
    },

    bottomNavBarElement: {
      color: "white", 
      fontSize: 20, 
      paddingRight: 25, 
      textAlign: "center"
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
    }, 

    // Profile styles
    inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    }, 

    loginBtn: {
      width: 150,
      borderRadius: 25,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
      padding: 50
    },

    forgot_button: {
      height: 30,
      marginBottom: 30,
    },

  });