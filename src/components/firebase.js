// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHk5idUc2lGd_AH-_cR6u0-rRm2ich2lI",
  authDomain: "whateverpi.firebaseapp.com",
  projectId: "whateverpi",
  storageBucket: "whateverpi.appspot.com",
  messagingSenderId: "522421453833",
  appId: "1:522421453833:web:ae3ab373253ca28c5fe4d8",
  measurementId: "G-QEWLKRX1YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
