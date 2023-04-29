import { Route, Routes } from 'react-router';

import HoldingCardsPage from './HoldingCardsPage';
import CardInfoRegisterPage from './CardInfoRegisterPage';
import CardNameRegisterPage from './CardNameRegisterPage';
import CardPage from './contexts/CardForm';

import Layout from '../components/common/Layout';
import useCards from '../hooks/useCards';

function App() {
  const { cards, registerCard } = useCards();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HoldingCardsPage cards={cards} />} />
        <Route element={<CardPage />}>
          <Route path="card-info-register" element={<CardInfoRegisterPage />} />
          <Route
            path="card-name-register"
            element={<CardNameRegisterPage registerCard={registerCard} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
