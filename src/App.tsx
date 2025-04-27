import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payments from './pages/payments/Payments';
import PaymentsComplete from './pages/paymentsComplete/PaymentsComplete';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/complete/" element={<PaymentsComplete />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
