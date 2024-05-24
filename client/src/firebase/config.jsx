// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC62iUAS0NAclEx36-FEhNkezagpVHXj38",
  authDomain: "food-web-3bda7.firebaseapp.com",
  projectId: "food-web-3bda7",
  storageBucket: "food-web-3bda7.appspot.com",
  messagingSenderId: "550497004745",
  appId: "1:550497004745:web:bb35d320ac1481d867b118",
  measurementId: "G-CN37GDR7JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);