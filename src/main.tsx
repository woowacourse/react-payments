import React from "react";
import ReactDOM from "react-dom/client";
import Payments from "./components/Payments/Payments";
import { CardProvider } from "./contexts/CardContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardProvider>
      <Payments />
    </CardProvider>
  </React.StrictMode>
);
