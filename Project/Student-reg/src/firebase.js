
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAJD2eR0nT8hQKv0b4vLSm9hmVlie1NWgA",
    authDomain: "septreact-802a9.firebaseapp.com",
    databaseURL: "https://septreact-802a9-default-rtdb.firebaseio.com",
    projectId: "septreact-802a9",
    storageBucket: "septreact-802a9.firebasestorage.app",
    messagingSenderId: "661909278517",
    appId: "1:661909278517:web:dd09b0026de3611186867c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)