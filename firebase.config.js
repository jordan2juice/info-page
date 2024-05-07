// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB20u9oJEJ8gbD27eFbCk7cS7TKJYkZAuI",
  authDomain: "info-project-6617f.firebaseapp.com",
  projectId: "info-project-6617f",
  storageBucket: "info-project-6617f.appspot.com",
  messagingSenderId: "975667755022",
  appId: "1:975667755022:web:c44a9cd2038cc423e5245f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

expor;

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  getFirestore,
};
ig;
