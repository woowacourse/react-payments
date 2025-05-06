import { HashRouter, Routes, Route } from "react-router";
import CardFormPage from "./pages/CardFormPage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CardFormPage />} />
        <Route path="/complete" element={<CardRegistrationCompletePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
