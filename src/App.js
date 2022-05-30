import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardListProvider } from 'contexts';

import AddCardPage from 'components/Page/AddCard/AddCardPage';
import AddCardResultPage from 'components/Page/AddCardResult/AddCardResult';
import CardListPage from 'components/Page/CardList/CardListPage';

const App = () => {
  return (
    <main>
      <CardListProvider>
        <Routes>
          <Route path="/react-payments/" element={<AddCardPage />} />
          <Route path="/react-payments/result" element={<AddCardResultPage />} />
          <Route path="/react-payments/list" element={<CardListPage />} />
        </Routes>
      </CardListProvider>
    </main>
  );
};

export default App;
