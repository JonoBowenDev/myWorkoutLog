import firebase from "firebase/app";
import "firebase/auth";


// TODO: Do these with process.env.REACT_APP_FIREBASE_APP_ID etc. for security

const app = firebase.initializeApp({
    apiKey: "AIzaSyCRCAaISw7TA3l3LSC7wTyQFaFAcfHDeMM",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID, 
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth(); 
export default app; 