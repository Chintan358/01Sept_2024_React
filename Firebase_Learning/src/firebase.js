// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJD2eR0nT8hQKv0b4vLSm9hmVlie1NWgA",
    authDomain: "septreact-802a9.firebaseapp.com",
    projectId: "septreact-802a9",
    storageBucket: "septreact-802a9.firebasestorage.app",
    messagingSenderId: "661909278517",
    appId: "1:661909278517:web:dd09b0026de3611186867c",
    databaseURL: "https://septreact-802a9-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);