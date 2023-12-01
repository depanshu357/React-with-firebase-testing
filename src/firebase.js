// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2PoFgKytVtVM71iEf08GC8C9XEY9loD4",
  authDomain: "react-with-firebase-3d069.firebaseapp.com",
  projectId: "react-with-firebase-3d069",
  storageBucket: "react-with-firebase-3d069.appspot.com",
  messagingSenderId: "263634380478",
  appId: "1:263634380478:web:b6ee15882558edfdf320ef",
  databaseURL: "https://react-with-firebase-3d069-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);