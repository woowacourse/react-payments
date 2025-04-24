import { Route, Routes } from 'react-router';
import Payments from './pages/payments/Payments';
import Complete from './pages/complete/Complete';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Payments />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
}

export default App;
