import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/react-payments">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
