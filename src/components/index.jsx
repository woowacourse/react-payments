import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCardResultPage from './Page/AddCardResult/AddCardResult';
import AddCardPage from './Page/AddCard/AddCardPage';
import CardListPage from './Page/CardList/CardListPage';

const CardApp = () => {
  return (
    <Routes>
      <Route path="/react-payments/" element={<AddCardPage />} />
      <Route path="/react-payments/result" element={<AddCardResultPage />} />
      <Route path="/react-payments/list" element={<CardListPage />} />
    </Routes>
  );
};

export default CardApp;
