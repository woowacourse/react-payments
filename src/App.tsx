import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegister from './pages/CardRegister/CardRegister';
import MyCardList from './pages/MyCardList/MyCardList';

import Layout from './components/@common/Layout/Layout';
import CardRegisterProvider from './context/CardRegisterContext';
import CardAlias from './pages/CardAlias/CardAlias';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <CardRegisterProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={ROUTES.MY_CARD_LIST} element={<Layout />}>
            <Route index element={<MyCardList />} />
            <Route path={ROUTES.REGISTER_CARD} element={<CardRegister />} />
            <Route path={ROUTES.ALIAS} element={<CardAlias />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CardRegisterProvider>
  );
}

export default App;
