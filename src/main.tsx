import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

async function main() {
  try {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/react-payments/mockServiceWorker.js",
      },
    });
  } catch (e) {
    console.error("MSW 시작 실패:", e);
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
