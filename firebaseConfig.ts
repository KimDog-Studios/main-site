// firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1sVi5LmG_V0gddRXRPxBreRUrtPTbny4",
  authDomain: "modding-site.firebaseapp.com",
  projectId: "modding-site",
  storageBucket: "modding-site.appspot.com",
  messagingSenderId: "751082024985",
  appId: "1:751082024985:web:41a4b3bb9ee7a547e2ba88",
  measurementId: "G-2GMT3R5SD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export Firestore functions and database
export { db, collection, doc, setDoc, getDoc, updateDoc };
