import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import { HashRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
