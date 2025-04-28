import { HashRouter, Routes, Route } from "react-router";
import CardFormPage from "./pages/CardFormPage";
import CardResistrationCompletePage from "./pages/CardResistrationCompletePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CardFormPage />} />
        <Route path="/complete" element={<CardResistrationCompletePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
