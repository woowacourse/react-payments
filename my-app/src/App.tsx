import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import CardRegisterationFormPage from "./pages/CardRegisterationFormPage";
import CardListPage from "./pages/CardListPage";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path={ROUTES.CARD_FORM} element={<CardRegisterationFormPage />} />
        <Route path={ROUTES.CARD_LIST} element={<CardListPage />} />
        <Route path="*" element={<Navigate to={ROUTES.CARD_LIST} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
