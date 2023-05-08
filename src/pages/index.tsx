import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

import HoldingCardsPage from './HoldingCardsPage';
import CardInfoRegisterPage from './CardInfoRegisterPage';
import CardNameRegisterPage from './CardNameRegisterPage';
import CardRegisterPage from './CardRegisterPage';
import CardFormContext from './contexts/CardFormContext';
import CardInfoRequired from './contexts/CardInfoRequired';

import { ROUTES } from '../constants/routes';
import Layout from '../components/common/Layout';
import useCards from '../hooks/useCards';

function App() {
  const { cards, registerCard } = useCards();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={ROUTES.MAIN}
          element={<HoldingCardsPage cards={cards} />}
        />
        <Route element={<CardFormContext />}>
          <Route
            path={ROUTES.CARD_INFO_REGISTER}
            element={<CardInfoRegisterPage />}
          />
          <Route element={<CardInfoRequired />}>
            <Route
              path={ROUTES.CARD_NAME_REGISTER}
              element={<CardNameRegisterPage />}
            />
            <Route
              path={ROUTES.CARD_REGISTER}
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
