// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPjri20nKGaygKoqAjVjWILJIewxilVbs",
  authDomain: "mywallet-1dd94.firebaseapp.com",
  projectId: "mywallet-1dd94",
  storageBucket: "mywallet-1dd94.firebasestorage.app",
  messagingSenderId: "998725947104",
  appId: "1:998725947104:web:325091114696bc37e28a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);