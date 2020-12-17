import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCoYf0H05pvltNa0wg4to4FZ4rUt5hUPxQ",
  authDomain:"okbikinis.firebaseapp.com",
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:  "okbikinis" ,
  storageBucket: "okbikinis.appspot.com",
  messagingSenderId:  "109070128678",
}

firebase.initializeApp(config)

// const db = firebase.firestore()

export { Axios }