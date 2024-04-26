import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import CardRegistration from "./pages/payments/CardRegistration";
import SuccessRegistration from "./pages/payments/SuccessRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardRegistration />} />
        <Route path="/register/success" element={<SuccessRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
