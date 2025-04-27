import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import PaymentInputPage from "./pages/add-card/paymentInput/PaymentInputPage.tsx";
import { PAGE_URL } from "./constants/pageUrl.ts";
import AddCardSuccessPage from "./pages/add-card/success/AddCardSuccessPage.tsx";
import NotFoundPage from "./pages/not-found/NotFoundPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={PAGE_URL.ADD_CARD} element={<PaymentInputPage />} />
        <Route
          path={PAGE_URL.ADD_CARD_SUCCES}
          element={<AddCardSuccessPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
