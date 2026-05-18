import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import CardFormPage from "./pages/CardFormPage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path={ROUTES.CARD_FORM} element={<CardFormPage />} />
        <Route path="/completed" element={<CardRegistrationCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
