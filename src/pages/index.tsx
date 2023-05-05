import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

import HoldingCardsPage from './HoldingCardsPage';
import CardInfoRegisterPage from './CardInfoRegisterPage';
import CardNameRegisterPage from './CardNameRegisterPage';
import CardRegisterPage from './CardRegisterPage';
import CardFormContext from './contexts/CardFormContext';
import CardInfoRequired from './contexts/CardInfoRequired';

import Layout from '../components/common/Layout';
import useCards from '../hooks/useCards';

function App() {
  const { cards, registerCard } = useCards();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HoldingCardsPage cards={cards} />} />
        <Route element={<CardFormContext />}>
          <Route path="card-info-register" element={<CardInfoRegisterPage />} />
          <Route element={<CardInfoRequired />}>
            <Route
              path="card-name-register"
              element={<CardNameRegisterPage />}
            />
            <Route
              path="card-register"
              element={<CardRegisterPage registerCard={registerCard} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
