// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvoJhUwz4Ee6dksS6ouV4TuQei2tEN8xw",
    authDomain: "kiddy-toy-store.firebaseapp.com",
    projectId: "kiddy-toy-store",
    storageBucket: "kiddy-toy-store.firebasestorage.app",
    messagingSenderId: "930250141617",
    appId: "1:930250141617:web:65f4c44ef4bf8f000c5790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;