import { Route, Routes } from 'react-router';
import Complete from './pages/complete/Complete';
import Payments from './pages/payments/Payments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Payments />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
}

export default App;
