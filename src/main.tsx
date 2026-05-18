import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start({
    serviceWorker: {
      url: "/react-payments/mockServiceWorker.js",
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
