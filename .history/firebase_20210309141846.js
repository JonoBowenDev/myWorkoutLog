import firebase from "firebase/app";
import "firebase/auth";
require('dotenv').config()

// TODO: Do these with process.env.REACT_APP_FIREBASE_APP_ID etc. for security
console.log(process.env)

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "auth-dev-1d115.firebaseapp.com",
    projectId: "auth-dev-1d115",
    storageBucket: "auth-dev-1d115.appspot.com",
    messagingSenderId:"354036953203", 
    appId: "1:354036953203:web:1e557d23d923c2cf3c7a06"
})

export const auth = app.auth(); 
export default app; 