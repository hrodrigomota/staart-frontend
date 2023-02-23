// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEI1OI8op0w5H20Z9NBrJhSxxEx90FCjI",
  authDomain: "staart-frontend.firebaseapp.com",
  projectId: "staart-frontend",
  storageBucket: "staart-frontend.appspot.com",
  messagingSenderId: "733438832728",
  appId: "1:733438832728:web:8288bd91f86aa43c4c9a2d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
