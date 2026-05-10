import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardFormPage from "./pages/CardFormPage";
import CompletedPage from "./pages/CompletedPage";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<CardFormPage />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
