import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWysf9XnPGxAQ_MZKvLwcPrNfPm0_7Ews",
  authDomain: "password-and-checklist-manager.firebaseapp.com",
  projectId: "password-and-checklist-manager",
  storageBucket: "password-and-checklist-manager.firebasestorage.app",
  messagingSenderId: "582874175143",
  appId: "1:582874175143:web:727766b4c9378133a6ad82",
  measurementId: "G-QF256MBHSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
