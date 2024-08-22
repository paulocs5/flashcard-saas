// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc8koNjyd4ypmaZo62SUjPTpqGx_zmQVs",
  authDomain: "flashcardsaas-958d1.firebaseapp.com",
  projectId: "flashcardsaas-958d1",
  storageBucket: "flashcardsaas-958d1.appspot.com",
  messagingSenderId: "899012562954",
  appId: "1:899012562954:web:d4f8cb35fbfa07b0748ff3",
  measurementId: "G-QNBMSN4MP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db}
