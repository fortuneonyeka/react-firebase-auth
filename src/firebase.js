import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


 const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APA_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID

};

 export const auth = getAuth
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export function signup (email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
   };
   export function login (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
   };
  
   export function logout() {
   return signOut(auth);
   }
  
  // //custom react Hook
   export function useAuth() {
     const [currentUser, setCurrentUser] = useState();
  
     useEffect(() => {
     const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user));
     return unsub;
    },[])
  
     return currentUser;
   }
