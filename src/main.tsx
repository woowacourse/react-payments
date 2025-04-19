import React from "react";
import ReactDOM from "react-dom/client";
import CardPaymentsPage from "./components/Card/CardPaymentsPage/CardPaymentsPage";
import { CardProvider } from "./contexts/CardContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardProvider>
      <CardPaymentsPage />
    </CardProvider>
  </React.StrictMode>
);
