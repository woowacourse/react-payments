import './core/styles/index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardListPage } from './pages/cardList/CardListPage';
import { Payments } from './pages/payments/Payments';
import { Result } from './pages/result/Result';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/cards" element={<CardListPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
