import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import CardList from "./pages/CardList";
import ConfirmAddCard from "./pages/ConfirmAddCard";
import ConfirmEditCard from "./pages/ConfirmEditCard";
import EditCard from "./pages/EditCard";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/editCard/:id" element={<EditCard />} />
          <Route path="/confirmAddCard" element={<ConfirmAddCard />} />
          <Route path="/confirmEditCard/:id" element={<ConfirmEditCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
