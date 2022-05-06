import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AddCard from '../pages/AddCard';
import CardList from '../pages/CardList';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/add" element={<AddCard />} />
          <Route path="/list" element={<CardList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
