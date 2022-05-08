import "styles/index.css";

import App from "App";
import Error from "components/common/Error";
import ErrorBoundary from "components/common/ErrorBoundary";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
