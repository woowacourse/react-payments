import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import { HashRouter } from "react-router-dom";
import App from "./App";

async function enableMocking() {
  const { worker } = await import("./mocks/browser"); //Dynamic import하는 것이 눈에 띄였다.
  return worker.start();
}
enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>,
  ),
);
