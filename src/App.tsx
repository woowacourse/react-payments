import React from 'react';
import AppProvider from 'context/Provider';
import AddCardPage from 'pages/AddCardPage';
import { Route, Routes } from 'react-router-dom';
import CardListPage from 'pages/CardListPage';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="card/add" element={<AddCardPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
