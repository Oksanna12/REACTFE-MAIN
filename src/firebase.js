// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs7V6NnKtleAYnO5lpeSFYzoYLMdaunGU",
  authDomain: "healthcare-cad3c.firebaseapp.com",
  projectId: "healthcare-cad3c",
  storageBucket: "healthcare-cad3c.appspot.com",
  messagingSenderId: "735895509806",
  appId: "1:735895509806:web:58bfcfbba6a2e6de7df8bf",
  measurementId: "G-XEB41D1XKL",
  databaseUrl: 'https://healthcare-cad3c-default-rtdb.europe-west1.firebasedatabase.app'
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const db = getFirestore(app);