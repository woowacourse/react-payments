import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardFormPage from "./pages/CardFormPage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<CardFormPage />} />
        <Route path="/completed" element={<CardRegistrationCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
