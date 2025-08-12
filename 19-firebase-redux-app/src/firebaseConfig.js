// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD52FdXUlcC_Fypxe0ipo9ROAWcbTwtKn4",
    authDomain: "react-5pm-c159a.firebaseapp.com",
    projectId: "react-5pm-c159a",
    storageBucket: "react-5pm-c159a.firebasestorage.app",
    messagingSenderId: "1001417665803",
    appId: "1:1001417665803:web:710665a62f8806b21e860e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);