import "./styles/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 서버에 따로 통신을 안한다고 가정한다면.. */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
