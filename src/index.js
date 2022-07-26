import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import NavBar from "./components/nav-bar/nav-bar";
import { CoffeeContextProvider } from "./context/coffee-context";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoffeeContextProvider>
      <BrowserRouter>
        <NavBar />
        <App />
      </BrowserRouter>
    </CoffeeContextProvider>
  </React.StrictMode>
);
