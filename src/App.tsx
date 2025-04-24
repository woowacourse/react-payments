import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardFormPage from "./CardFormPage/CardFormPage";
import ResultPage from "./ResultPage/ResultPage";

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
