import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Card from "./components/Card";
import CardComplete from "./components/Complete/CardComplete";

function App() {
  const [newCard, setNewCard] = useState({});

  return (
    <div>
      <Routes>
        <Route
          path="react-payments/"
          element={<Card setNewCard={setNewCard} />}
        />
        <Route
          path="react-payments/complete/"
          element={<CardComplete newCard={newCard} />}
        />
      </Routes>
    </div>
  );
}

export default App;
