import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvbzkn4YeACzjkug8YLxV1XkFxN_fNHbk",
  authDomain: "heyjag-vip.firebaseapp.com",
  projectId: "heyjag-vip",
  storageBucket: "heyjag-vip.appspot.com",
  messagingSenderId: "994124103937",
  appId: "1:994124103937:web:44134c2b7fee1571d51b00",
  measurementId: "G-7FMQ3VE1D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // <--- Add this line

const login = async () => {
  try {
    const result = await auth.signInWithEmailAndPassword('user@example.com', 'password');
    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
};

const register = async () => {
  try {
    const result = await auth.createUserWithEmailAndPassword('user@example.com', 'password');
    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
};