// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXlDwFGKegzwjvtubd3SMGijZ0PkBa0LM",
  authDomain: "reactjs-sample-0225-746d5.firebaseapp.com",
  projectId: "reactjs-sample-0225-746d5",
  storageBucket: "reactjs-sample-0225-746d5.firebasestorage.app",
  messagingSenderId: "491686555515",
  appId: "1:491686555515:web:c0a4693ed6fd0291bb57de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
