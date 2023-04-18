import React from 'react';
import CardListPage from './components/pages/CardListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
