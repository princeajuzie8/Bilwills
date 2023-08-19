// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwVBiUrTD2ql2kIJhzdDILRvKvtqH-wAU",
  authDomain: "bilwillschat.firebaseapp.com",
  projectId: "bilwillschat",
  storageBucket: "bilwillschat.appspot.com",
  messagingSenderId: "662142604214",
  appId: "1:662142604214:web:228e3b0a2b0aed2c11e717",
  measurementId: "G-KWMZS3JE1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
const analytics = getAnalytics(app);