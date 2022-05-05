import React from 'react';
import AddCard from './pages/AddCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import CardList from './pages/CardList';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddCard />} />
          <Route path="/list" element={<CardList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
