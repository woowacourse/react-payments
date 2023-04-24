import { Route, Routes } from 'react-router-dom';

import HoldingCardsPage from './pages/HoldingCardsPage';
import CardRegisterPage from './pages/CardRegisterPage';
import { ModalProvider } from './components/common/Modal/ModalContext';
import { CardsProvider } from './domain/context/CardsContext';

const App = () => {
  return (
    <ModalProvider>
      <CardsProvider>
        <Routes>
          <Route path="/" element={<HoldingCardsPage />} />
          <Route path="/card-register" element={<CardRegisterPage />} />
          <Route path="/card-nickname" element={<CardNicknamePage />} />
        </Routes>
      </CardsProvider>
    </ModalProvider>
  );
};

export default App;
