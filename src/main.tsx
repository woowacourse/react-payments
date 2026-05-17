import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

async function main() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    await worker.start({ onUnhandledRequest: "bypass" });
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter basename="/react-payments/">
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

main();
