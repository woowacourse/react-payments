import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultPage from "./pages/ResultPage/ResultPage";
import CardFormPage from "./pages/CardFormPage/CardFormPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardFormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
