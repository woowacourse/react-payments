import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegister from './pages/CardRegister/CardRegister';
import MyCardList from './pages/MyCardList/MyCardList';

import Layout from './components/@common/Layout/Layout';
import CardRegisterProvider from './context/CardRegisterContext';
import CardAlias from './pages/CardAlias/CardAlias';
import { ROUTES } from './constants/routes';
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <CardRegisterProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<MyCardList />} />
          <Route path={ROUTES.REGISTER_CARD} element={<CardRegister />} />
          <Route path={ROUTES.ALIAS} element={<CardAlias />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CardRegisterProvider>
  );
}

export default App;
