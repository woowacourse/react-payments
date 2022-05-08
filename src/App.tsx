import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import CardList from "./pages/CardList";
import ConfirmAddCard from "./pages/ConfirmAddCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/react-payments" element={<AddCard />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/confirmAddCard" element={<ConfirmAddCard />} />
          <Route path="/cardList" element={<CardList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
