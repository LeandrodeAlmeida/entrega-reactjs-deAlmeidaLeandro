import React from "react";
import MainRouter from "./routes/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <CartProvider>
      <MainRouter />
      </CartProvider>
    </>
  );
}

export default App;
