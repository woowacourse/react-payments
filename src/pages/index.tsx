import { Route, Routes } from 'react-router';

import HoldingCardsPage from './HoldingCardsPage';
import CardRegisterPage from './CardRegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HoldingCardsPage />} />
      <Route path="card-register" element={<CardRegisterPage />} />
    </Routes>
  );
}

export default App;
