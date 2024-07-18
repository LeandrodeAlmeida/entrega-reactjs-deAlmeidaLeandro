import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwm1yCJJBwLrwyBOp2H_5-EtaJDy63TDI",
  authDomain: "entrega-leandro.firebaseapp.com",
  projectId: "entrega-leandro",
  storageBucket: "entrega-leandro.appspot.com",
  messagingSenderId: "334515367376",
  appId: "1:334515367376:web:c62e1d61af4cdf349a9dd5",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
