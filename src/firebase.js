// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAFKbKmB_DiHh2G-I94cD2QwuisowdOck",
    authDomain: "backronym-generator-90cc7.firebaseapp.com",
    projectId: "backronym-generator-90cc7",
    storageBucket: "backronym-generator-90cc7.appspot.com",
    messagingSenderId: "907693061369",
    appId: "1:907693061369:web:47307aee336569b0ef9e28"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase