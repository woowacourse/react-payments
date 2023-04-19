import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCardPage from './pages/AddCardPage';

import MyCardPage from './pages/MyCardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MyCardPage />} />
        <Route path="addCard" element={<AddCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
