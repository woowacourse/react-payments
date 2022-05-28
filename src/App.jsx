import { useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import MainPage from 'page/main';
import CardAppPage from 'page/cardAdd';
import ConfirmationPage from 'page/confirmation';
import reducer from 'reducer/card';
import { ROUTE, BASENAME } from 'constants';
import { CardContext } from 'hooks/useCardContext';

const initialState = {
  cards: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <CardContext.Provider value={{ state, dispatch }}>
        <BrowserRouter basename={BASENAME}>
          <Header />
          <Routes>
            <Route path={ROUTE.MAIN} element={<MainPage />} />
            <Route path={ROUTE.ADD} element={<CardAppPage />} />
            <Route path={ROUTE.CONFIRM + ':id'} element={<ConfirmationPage />} />
            <Route path={ROUTE.NO_MATCHED} element={<Navigate to={ROUTE.MAIN} />} />
          </Routes>
        </BrowserRouter>
      </CardContext.Provider>
    </Layout>
  );
};

export default App;
