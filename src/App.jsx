import { useReducer, createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import MainPage from 'page/main';
import CardAppPage from 'page/cardAdd';
import ConfirmationPage from 'page/confirmation';
import reducer from 'reducer/card';
import { ROUTE, BASENAME } from 'constants';

const initialState = {
  cards: [],
};

export const CardDispatch = createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <CardDispatch.Provider value={{ state, dispatch }}>
        <BrowserRouter basename={BASENAME}>
          <Header />
          <Routes>
            <Route path={ROUTE.MAIN} element={<MainPage />} />
            <Route path={ROUTE.ADD} element={<CardAppPage />} />
            <Route path={ROUTE.CONFIRM + ':id'} element={<ConfirmationPage />} />
            <Route path={ROUTE.NO_MATCHED} element={<Navigate to={ROUTE.MAIN} />} />
          </Routes>
        </BrowserRouter>
      </CardDispatch.Provider>
    </Layout>
  );
};

export default App;
