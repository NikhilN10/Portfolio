// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWvvlGbX30dz9touzsUjIja8SpKlEYuR4",
  authDomain: "portfolio-17043.firebaseapp.com",
  projectId: "portfolio-17043",
  storageBucket: "portfolio-17043.firebasestorage.app",
  messagingSenderId: "833948538635",
  appId: "1:833948538635:web:c17043b46f2b009e72340e",
  measurementId: "G-C5TQPYWH6T"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
