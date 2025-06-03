import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXmHqee4smbKePVMEBeKSs3_yV7C1sMrU",
  authDomain: "coderhouse-73695.firebaseapp.com",
  projectId: "coderhouse-73695",
  storageBucket: "coderhouse-73695.firebasestorage.app",
  messagingSenderId: "962483450216",
  appId: "1:962483450216:web:5ea7deea9de4bde090a6dd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
