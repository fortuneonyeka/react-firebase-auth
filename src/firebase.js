// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB80PxVF4efp9WCafJH9JN0pBCeTM7BFd4",
  authDomain: "fir-auth-22081.firebaseapp.com",
  projectId: "fir-auth-22081",
  storageBucket: "fir-auth-22081.appspot.com",
  messagingSenderId: "341529032198",
  appId: "1:341529032198:web:ed3af93cf4ed7e72a2b587",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup (email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
};
export function login (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
};

export function logout() {
 return signOut(auth);
}

//custom react Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
   const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user));
   return unsub;
  },[])

  return currentUser;
}
