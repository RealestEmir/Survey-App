// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYf8gxCE184MzG0O_ByQ4ZfFBm9C29j3c",
  authDomain: "survey-app-d5ee0.firebaseapp.com",
  projectId: "survey-app-d5ee0",
  storageBucket: "survey-app-d5ee0.firebasestorage.app",
  messagingSenderId: "816751681386",
  appId: "1:816751681386:web:7d7da97b20e6103ef54f13",
  measurementId: "G-79FL993Y4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Analytics only on client side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics };
