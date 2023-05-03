import React from "react";
import ReactDOM from "react-dom/client";
import { $ } from "utils/selector";
import App from "./App";
import { GlobalStyle } from "GlobalStyle";

const root = ReactDOM.createRoot($("#root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
