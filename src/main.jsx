import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwm1yCJJBwLrwyBOp2H_5-EtaJDy63TDI",
  authDomain: "entrega-leandro.firebaseapp.com",
  projectId: "entrega-leandro",
  storageBucket: "entrega-leandro.appspot.com",
  messagingSenderId: "334515367376",
  appId: "1:334515367376:web:c62e1d61af4cdf349a9dd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
