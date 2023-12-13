import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoZ8w-LBz2VxRCCdiMcqk42QliVaawuM8",
  authDomain: "react-chat-56237.firebaseapp.com",
  projectId: "react-chat-56237",
  storageBucket: "react-chat-56237.appspot.com",
  messagingSenderId: "949274951603",
  appId: "1:949274951603:web:eafed5f0415ace06d1d5c6",
  measurementId: "G-J8FKBEC1DR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
