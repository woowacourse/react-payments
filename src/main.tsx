import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CardInputPage from "./pages/CardInputPage/CardInputPage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardInputPage />
    </BrowserRouter>
  </React.StrictMode>
);
