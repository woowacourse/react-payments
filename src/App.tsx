import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';

import AppProvider from 'context/Provider';

import AddCardPage from 'pages/AddCardPage';
import CardListPage from 'pages/CardListPage';
import CardEditPage from 'pages/CardEditPage';
import CardPayPage from 'pages/CardPayPage';
import WrongPathPage from 'pages/WrongPathPage';

import { initial } from 'styles/global';

function App() {
  return (
    <AppProvider>
      <Global styles={initial} />
      <Routes>
        <Route path="/card" element={<CardListPage />} />
        <Route path="/card/add" element={<AddCardPage />} />
        <Route path="/card/edit/*" element={<CardEditPage />} />
        <Route path="/card/pay/*" element={<CardPayPage />} />
        <Route path="*" element={<WrongPathPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
