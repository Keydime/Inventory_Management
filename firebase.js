// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpa0vWj2yHmqtAhcL8Dola_Hnh2roobi0",
  authDomain: "inventory-managment-27750.firebaseapp.com",
  projectId: "inventory-managment-27750",
  storageBucket: "inventory-managment-27750.appspot.com",
  messagingSenderId: "859781751700",
  appId: "1:859781751700:web:f3408a758e4bdd66e76581",
  measurementId: "G-Z9W8TWV82Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}