import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import AddCard from './pages/AddCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-card" element={<AddCard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
