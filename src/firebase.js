// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUOzNN8WxlTj9rPqs8modAUwuE2OQMSg",
  authDomain: "healthcare-78034.firebaseapp.com",
  projectId: "healthcare-78034",
  storageBucket: "healthcare-78034.appspot.com",
  messagingSenderId: "691506054062",
  appId: "1:691506054062:web:2961b8310d79f598553e3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);