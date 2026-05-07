import CardFormPage from "./pages/CardFormPage";
import CompletedPage from "./pages/CompletedPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardFormPage />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
