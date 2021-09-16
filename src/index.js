import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="react-payments">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
