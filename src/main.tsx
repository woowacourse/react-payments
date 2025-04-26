import "./styles/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import MobileLayout from "./components/MobileLayout/MobileLayout.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <MobileLayout>
        <App />
      </MobileLayout>
    </BrowserRouter>
  </React.StrictMode>
);
