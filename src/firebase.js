import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlh8LVKNMC4yv_I_AWue-wCClZ2xxz3Tw",
    authDomain: "vibes-a93fe.firebaseapp.com",
    projectId: "vibes-a93fe",
    storageBucket: "vibes-a93fe.appspot.com",
    messagingSenderId: "612193570592",
    appId: "1:612193570592:web:11670fcf9bd8c7e8ac5145",
    measurementId: "G-E7Q3NV3WM2"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(); // How to store images in firebase.
export { app, db };