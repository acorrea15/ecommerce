import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // El browserRouter va siempre en el index.js para comenzar a utilizar las rutas. 
  // Además, se crea el componente rutas y ese componente va en el app.js
  <BrowserRouter>
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
  </BrowserRouter>
);
reportWebVitals();
