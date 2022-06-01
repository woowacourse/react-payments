import { useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout, Header } from 'components';
import { MainPage, CardAddPage, ConfirmationPage } from 'page';

import reducer from 'reducer/card';
import { ROUTE, BASENAME, SERVER_URL } from 'constants';
import { CardContext } from 'hooks/useCardContext';
import axios from 'axios';

axios.defaults.baseURL = SERVER_URL;

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
            <Route path={ROUTE.ADD} element={<CardAddPage />} />
            <Route path={ROUTE.CONFIRM + ':id'} element={<ConfirmationPage />} />
            <Route path={ROUTE.NO_MATCHED} element={<Navigate to={ROUTE.MAIN} />} />
          </Routes>
        </BrowserRouter>
      </CardContext.Provider>
    </Layout>
  );
};

export default App;
