import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { enableMocking } from "./mocks/index.ts";

import App from "./App.tsx";

import "./index.css";

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
