// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYf8gxCE184MzG0O_ByQ4ZfFBm9C29j3c",
  authDomain: "survey-app-d5ee0.firebaseapp.com",
  databaseURL: "https://survey-app-d5ee0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "survey-app-d5ee0",
  storageBucket: "survey-app-d5ee0.firebasestorage.app",
  messagingSenderId: "816751681386",
  appId: "1:816751681386:web:7d7da97b20e6103ef54f13",
  measurementId: "G-79FL993Y4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);