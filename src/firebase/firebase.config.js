// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJFeIw01NIEVBBQWJ8qevNvm4NZn2vMPU",
    authDomain: "pc-builder01.firebaseapp.com",
    projectId: "pc-builder01",
    storageBucket: "pc-builder01.appspot.com",
    messagingSenderId: "974765302396",
    appId: "1:974765302396:web:116f50b1403dbd09c3dff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;