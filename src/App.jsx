import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyle from 'GlobalStyle';

import { AddCard, AddCardComplete, CardList } from 'pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/add-card" element={<AddCard />} />
        <Route path="/add-card-complete" element={<AddCardComplete />} />
        <Route path="/card-list" element={<CardList />} />
        <Route path="*" element={<Navigate to="/card-list" replace />} />
      </Routes>
    </>
  );
}

export default memo(App);
