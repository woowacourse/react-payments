import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddCard from './pages/payments/AddCard';
import AddCardComplete from './pages/payments/AddCardComplete';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.CARD_NEW} />} />
        <Route path={ROUTES.CARD_NEW} element={<AddCard />} />
        <Route path={ROUTES.CARD_COMPLETE} element={<AddCardComplete />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
