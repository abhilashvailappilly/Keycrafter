// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth,signOut,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore,getDocs,deleteDoc,doc, collection, addDoc,query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,doc,deleteDoc,signOut, db,query, where,getDocs, GoogleAuthProvider, signInWithPopup, collection, addDoc };
