import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCard from './addCard/components/AddCard';
import AddCardSuccess from './addSuccess/components/AddCardSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<AddCard />} />
          <Route path="/success" element={<AddCardSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
