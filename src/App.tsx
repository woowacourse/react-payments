import { BrowserRouter, Route, Routes } from 'react-router';
import Payments from './pages/payments/Payments';
import Complete from './pages/complete/Complete';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
