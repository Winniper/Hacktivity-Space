import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSCat4huiKy6vT8ZV_3Av71NOG20k14AA",
  authDomain: "hacktivity-space.firebaseapp.com",
  projectId: "hacktivity-space",
  storageBucket: "hacktivity-space.firebasestorage.app",
  messagingSenderId: "1074291968621",
  appId: "1:1074291968621:web:a3446ec1cb8adfc1f90d64",
  measurementId: "G-083W374QXT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)