import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentApp from "./components/CardRegistrationPage";
import CardRegistrationCompletePage from "./components/CardRegistrationCompletePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cardRegistrationPage" element={<PaymentApp />} />
          <Route path="/cardRegistrationCompletePage" element={<CardRegistrationCompletePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
