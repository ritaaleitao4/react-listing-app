import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAWF_GAhv20m9vii4bsSFCB1U-OLQAobUM",
  authDomain: "market-642c6.firebaseapp.com",
  databaseURL: "https://market-642c6.firebaseio.com",
  projectId: "market-642c6",
  storageBucket: "market-642c6.appspot.com",
  messagingSenderId: "957679534101",
  appId: "1:957679534101:web:b1b1543011b17e143f0e1c",
  measurementId: "G-5V7H843VSL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.firestore();