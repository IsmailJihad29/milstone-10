// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmGJpZAqfNCeKfx5_qzwe8pMJMHdKbXGg",
  authDomain: "dimple-firebase-8e284.firebaseapp.com",
  projectId: "dimple-firebase-8e284",
  storageBucket: "dimple-firebase-8e284.appspot.com",
  messagingSenderId: "199651113428",
  appId: "1:199651113428:web:15a8981bdf06a79c28be41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app