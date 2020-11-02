import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwT_ianjpetge74HZW0tXcY8XwGu97Wj8",
  authDomain: "clone-1b8d1.firebaseapp.com",
  databaseURL: "https://clone-1b8d1.firebaseio.com",
  projectId: "clone-1b8d1",
  storageBucket: "clone-1b8d1.appspot.com",
  messagingSenderId: "134693751189",
  appId: "1:134693751189:web:4e48e287ff1bd83b030e9c",
  measurementId: "G-ML7NXR24NK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
