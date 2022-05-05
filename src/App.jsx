import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardProvider from 'context/CardContext';
import CardAddition from 'pages/CardAddition';
import CardList from 'pages/CardList';

function App() {
  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route path="/add-card" element={<CardAddition />} />
          <Route path="/card-list" element={<CardList />} />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
