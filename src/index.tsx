import React from "react";

import "./styles/index.css";

import ReactDOM from "react-dom/client";

import App from "./App";

import { ContextProvider } from "./contexts/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
