import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResultPage from "./pages/ResultPage/ResultPage";
import CardFormPage from "./pages/CardFormPage/CardFormPage";
import { PAYMENTS_ROUTE } from "./constants/PaymentsRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAYMENTS_ROUTE.CARD_FORM} element={<CardFormPage />} />
        <Route path={PAYMENTS_ROUTE.RESULT} element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
