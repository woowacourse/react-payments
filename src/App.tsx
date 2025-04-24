import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payments from './pages/payments/Payments';
import PaymentsComplete from './pages/paymemtsComplete/PaymentsComplete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/complete/" element={<PaymentsComplete />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
