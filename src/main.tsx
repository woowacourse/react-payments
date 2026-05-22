import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import { HashRouter } from "react-router-dom";
import App from "./App";

// 미션 제출을 위해 배포 환경에서도 MSW를 이용해 mocking 실시
async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
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
