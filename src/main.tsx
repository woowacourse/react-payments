import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CardRegisterPage from "./feature/CardRegister/CardRegisterPage";
import "./styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardRegisterCompletePage from "./feature/CardRegisterComplete/CardRegisterCompletePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="register" element={<CardRegisterPage />} />
        <Route
          path="register-complete"
          element={<CardRegisterCompletePage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
