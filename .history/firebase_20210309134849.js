import firebase from "firebase/app";
import "firebase/auth";


// TODO: Do these with process.env.REACT_APP_FIREBASE_APP_ID etc. for security
// console.log(process.env.REACT_APP_FIREBASE_SENDER_ID)

const app = firebase.initializeApp({
    apiKey: "AIzaSyCRCAaISw7TA3l3LSC7wTyQFaFAcfHDeMM",
    authDomain: "auth-dev-1d115.firebaseapp.com",
    projectId: "auth-dev-1d115",
    storageBucket: "auth-dev-1d115.appspot.com",
    messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID, 
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth(); 
export default app; 