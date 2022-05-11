import React from 'react';
import AppProvider from 'context/Provider';
import AddCardPage from 'pages/AddCardPage';
import { Route, Routes } from 'react-router-dom';
import CardListPage from 'pages/CardListPage';
import CardEditPage from 'pages/CardEditPage';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="card/add" element={<AddCardPage />} />
        <Route path="card/edit/*" element={<CardEditPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
