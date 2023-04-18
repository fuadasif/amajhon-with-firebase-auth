// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoxgaUJi7caAxw5k65HUQ89vNRhSudhYs",
  authDomain: "ema-john-with-firebase-a-a26e5.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-a26e5",
  storageBucket: "ema-john-with-firebase-a-a26e5.appspot.com",
  messagingSenderId: "635262278207",
  appId: "1:635262278207:web:37ed0e1204ba62c4a0368a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;