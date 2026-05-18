import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { worker } from "../features/card/mocks/browser";

if (import.meta.env.DEV) {
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: { url: "/react-payments/mockServiceWorker.js" },
  });
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
