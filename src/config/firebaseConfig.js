// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQdwlv0o45A-m8WFXi-s7SxQRuCdWhEXY",
    authDomain: "lucloud-b6d41.firebaseapp.com",
    projectId: "lucloud-b6d41",
    storageBucket: "lucloud-b6d41.appspot.com",
    messagingSenderId: "710005974900",
    appId: "1:710005974900:web:d346e91bf25efa8ff7ee21",
    measurementId: "G-J3MS79S4RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);