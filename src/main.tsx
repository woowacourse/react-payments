import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start({
    serviceWorker: { url: "/react-payments/mockServiceWorker.js" },
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/react-payments">
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
});
