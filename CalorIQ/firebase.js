// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV9TfyH7-m_RBBy6e9msoaPgGA4Fhuf18",
  authDomain: "caloriq-c4568.firebaseapp.com",
  projectId: "caloriq-c4568",
  storageBucket: "caloriq-c4568.appspot.com",
  messagingSenderId: "958922887889",
  appId: "1:958922887889:web:17d749c1e133ccaffdabf0",
  measurementId: "G-EK0HNLL4MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };