// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth,signOut,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore,getDocs,deleteDoc,doc, collection, addDoc,query, where } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0uXfIeZkFkWDoNt9JgyoTFZWEo2gZxXY",
    authDomain: "passwordgenerator-8f8ea.firebaseapp.com",
    projectId: "passwordgenerator-8f8ea",
    storageBucket: "passwordgenerator-8f8ea.appspot.com",
    messagingSenderId: "392048103415",
    appId: "1:392048103415:web:bd609a9b216f93a10ae8f2",
    measurementId: "G-F832PQFDM5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,doc,deleteDoc,signOut, db,query, where,getDocs, GoogleAuthProvider, signInWithPopup, collection, addDoc };
