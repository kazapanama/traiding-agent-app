// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_BASE_URL,
  authDomain: "tradingagentapp.firebaseapp.com",
  projectId: "tradingagentapp",
  storageBucket: "tradingagentapp.appspot.com",
  messagingSenderId: "445219904819",
  appId: "1:445219904819:web:11c1cf4faf4bd39f383246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

