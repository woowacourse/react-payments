import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CardContextProvider } from "./context/CardContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>
);
