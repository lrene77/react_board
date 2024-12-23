// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50eBEK39FwoZxUmdeUj_5b25BCaKsGNI",
  authDomain: "reactlist-635e0.firebaseapp.com",
  projectId: "reactlist-635e0",
  storageBucket: "reactlist-635e0.firebasestorage.app",
  messagingSenderId: "145375235074",
  appId: "1:145375235074:web:68e83fc9f2c5d4303feb1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

