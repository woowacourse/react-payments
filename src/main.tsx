import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Router from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
