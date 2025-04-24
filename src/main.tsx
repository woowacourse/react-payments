import React from "react";
import ReactDOM from "react-dom/client";
import CardPaymentsPage from "./components/Card/CardPaymentsPage/CardPaymentsPage";
import { CardProvider } from "./contexts/CardContext";
import { CardValidationProvider } from "./contexts/CardValidationContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardProvider>
      <CardValidationProvider>
        <CardPaymentsPage />
      </CardValidationProvider>
    </CardProvider>
  </React.StrictMode>
);
