import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddCard from './pages/payments/AddCard';
import AddCardComplete from './pages/payments/AddCardComplete';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<Navigate to="/cards/new" />} />
        <Route path="/cards/new" element={<AddCard />} />
        <Route path="/cards/complete" element={<AddCardComplete />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
