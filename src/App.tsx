import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardRegister from './pages/CardRegister/CardRegister';
import MyCardList from './pages/MyCardList/MyCardList';

import Layout from './components/@common/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<MyCardList />} />
            <Route path="/registerCard" element={<CardRegister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
