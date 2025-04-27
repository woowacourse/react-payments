import "./styles/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { locations } from "./AddCard/constants/locations.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={locations.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
