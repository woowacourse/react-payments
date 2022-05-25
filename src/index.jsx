import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "components/App";

import { PathProvider } from "components/context/PathProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PathProvider>
      <App />
    </PathProvider>
  </React.StrictMode>
);
