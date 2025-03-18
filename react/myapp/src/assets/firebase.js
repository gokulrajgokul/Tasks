import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDbGZOR2zMrTZ8OeRhX2qQl60cq9Ujez3I",
  authDomain: "reactlogin-9c9e2.firebaseapp.com",
  databaseURL: "https://reactlogin-9c9e2-default-rtdb.firebaseio.com/",//realtime db url
  projectId: "reactlogin-9c9e2",
  storageBucket: "reactlogin-9c9e2.firebasestorage.app",
  messagingSenderId: "111433394418",
  appId: "1:111433394418:web:8760a8abe0d6a549e9086b",
  measurementId: "G-3BTKYNY6SB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export for use in other files
export const auth = app.auth();
export const database = app.database(); // Correct database export

export default app;
