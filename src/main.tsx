import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/index.css";
import Complete from "./pages/complete/Complete.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={"/react-payments"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
