import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payments from "./pages/Payments";
import PaymentsSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/success" element={<PaymentsSuccess cardNumber="5511" cardName="BC카드" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
